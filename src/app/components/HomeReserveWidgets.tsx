"use client";

import { useCallback, useEffect, useState } from "react";

const TOKEN = "FyIfnPwcV8";
const TAG = "site";
const WIDGET_SCRIPT_ID = "homereserve-widget-script";
const WIDGET_SCRIPT_SRC = "https://homereserve.ru/widget.js";
const SEARCH_INSTANCE_ID = "country-house-search";
const SEARCH_CONTAINER_ID = "hr-widget";
const MAX_LOAD_ATTEMPTS = 3;
const API_WAIT_TIMEOUT_MS = 6000;
const MOUNT_WAIT_TIMEOUT_MS = 8000;
type WidgetLoadState = "loading" | "ready" | "error";

type HomeReserveWidgetConfig = {
  token: string;
  tag: string;
  instance_id: string;
};

type HomeReserveApi = {
  initWidgetSearch: (config: HomeReserveWidgetConfig, containerId?: string) => void;
  destroyWidget?: (instanceId?: string | null) => void;
};

declare global {
  interface Window {
    homereserve?: HomeReserveApi;
    __homeReserveWidgetLoading?: Promise<void>;
  }
}

function wait(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function waitForHomeReserveApi(timeout = API_WAIT_TIMEOUT_MS) {
  if (window.homereserve) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (window.homereserve) {
        window.clearInterval(timer);
        resolve();
        return;
      }

      if (Date.now() - startedAt > timeout) {
        window.clearInterval(timer);
        reject(new Error("HomeReserve API was not registered"));
      }
    }, 100);
  });
}

function loadHomeReserveScriptOnce() {
  if (window.homereserve) {
    return Promise.resolve();
  }

  if (window.__homeReserveWidgetLoading) {
    return window.__homeReserveWidgetLoading;
  }

  window.__homeReserveWidgetLoading = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(WIDGET_SCRIPT_ID);

    if (existingScript) {
      if (window.homereserve) {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = WIDGET_SCRIPT_ID;
    script.type = "module";
    script.src = WIDGET_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("HomeReserve widget failed to load"));
    document.body.appendChild(script);
  });

  return window.__homeReserveWidgetLoading;
}

async function loadHomeReserveScript() {
  for (let attempt = 1; attempt <= MAX_LOAD_ATTEMPTS; attempt += 1) {
    try {
      await loadHomeReserveScriptOnce();
      await waitForHomeReserveApi();
      return;
    } catch (error) {
      window.__homeReserveWidgetLoading = undefined;
      document.getElementById(WIDGET_SCRIPT_ID)?.remove();

      if (attempt === MAX_LOAD_ATTEMPTS) {
        throw error;
      }

      await wait(attempt * 700);
    }
  }
}

function getHomeReserveApi() {
  if (!window.homereserve) {
    throw new Error("HomeReserve API is not available");
  }

  return window.homereserve;
}

function mountSearchWidget() {
  const homereserve = getHomeReserveApi();

  homereserve.destroyWidget?.(SEARCH_INSTANCE_ID);
  homereserve.initWidgetSearch(
    {
      token: TOKEN,
      tag: TAG,
      instance_id: SEARCH_INSTANCE_ID,
    },
    SEARCH_CONTAINER_ID,
  );
}

function isWidgetMounted(instanceId: string) {
  const container = document.querySelector<HTMLElement>(
    `[data-instance-id="${instanceId}"]`,
  );

  return Boolean(
    container &&
      Array.from(container.childNodes).some((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          return true;
        }

        return Boolean(node.textContent?.trim());
      }),
  );
}

function waitForWidgetMounted(instanceId: string, timeout = MOUNT_WAIT_TIMEOUT_MS) {
  return new Promise<void>((resolve, reject) => {
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (isWidgetMounted(instanceId)) {
        window.clearInterval(timer);
        resolve();
        return;
      }

      if (Date.now() - startedAt > timeout) {
        window.clearInterval(timer);
        reject(new Error("HomeReserve widgets were not mounted"));
      }
    }, 150);
  });
}

export default function HomeReserveWidgets() {
  const [searchState, setSearchState] = useState<WidgetLoadState>(
    "loading",
  );
  const [retryKey, setRetryKey] = useState(0);

  const retry = useCallback(() => {
    setSearchState("loading");
    setRetryKey((current) => current + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;

    loadHomeReserveScript()
      .then(async () => {
        if (cancelled) {
          return;
        }

        try {
          mountSearchWidget();
          waitForWidgetMounted(SEARCH_INSTANCE_ID)
            .then(() => {
              if (!cancelled) {
                setSearchState("ready");
              }
            })
            .catch((error) => {
              console.error(error);
              if (!cancelled) {
                setSearchState("error");
              }
            });
        } catch (error) {
          console.error(error);
          if (!cancelled) {
            setSearchState("error");
          }
        }

      })
      .catch((error) => {
        console.error(error);
        if (!cancelled) {
          setSearchState("error");
        }
      });

    return () => {
      cancelled = true;
      window.homereserve?.destroyWidget?.(SEARCH_INSTANCE_ID);
    };
  }, [retryKey]);

  return (
    <>
      <section className="booking-widget-section" id="booking">
        <div className="booking-widget-inner">
          <div className="booking-widget-copy">
            <p className="eyebrow">Бронирование</p>
            <h2>Проверьте даты и стоимость</h2>
            <p>
              Выберите даты проживания, количество гостей и посмотрите
              доступные варианты Country House.
            </p>
          </div>
          <div className="booking-widget-card search-widget-card">
            {searchState !== "ready" && (
              <WidgetLoader state={searchState} onRetry={retry} />
            )}
            <div
              data-instance-id={SEARCH_INSTANCE_ID}
              id={SEARCH_CONTAINER_ID}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function WidgetLoader({
  onRetry,
  state,
}: {
  onRetry: () => void;
  state: Exclude<WidgetLoadState, "ready">;
}) {
  if (state === "error") {
    return (
      <div className="booking-widget-status" role="status">
        <span>Не удалось загрузить модуль бронирования.</span>
        <button type="button" onClick={onRetry}>
          Повторить
        </button>
      </div>
    );
  }

  return (
    <div className="booking-widget-status" role="status">
      <span>Загружаем модуль бронирования...</span>
    </div>
  );
}
