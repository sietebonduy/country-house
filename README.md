# Country House

Next.js сайт апартаментов Country House.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GitHub Actions

В репозитории настроены два workflow:

- `CI` запускается на push в `main`/`master` и на pull request: устанавливает зависимости, проверяет TypeScript и собирает сайт.
- `Deploy` запускается вручную или на push в `main`: собирает release-архив и выкладывает его на сервер по SSH, если настроены секреты.

Для деплоя добавьте в GitHub `Settings -> Secrets and variables -> Actions`:

- `NEXT_PUBLIC_SITE_URL` в Variables: публичный URL сайта для SEO, например `https://country-house-tlt.ru`.
- `DEPLOY_HOST` в Secrets: IP или домен сервера.
- `DEPLOY_USER` в Secrets: SSH-пользователь.
- `DEPLOY_PORT` в Secrets: SSH-порт, можно не задавать, тогда используется `22`.
- `DEPLOY_SSH_KEY` в Secrets: приватный SSH-ключ для деплоя.
- `DEPLOY_PATH` в Secrets: директория приложения на сервере, например `/var/www/country-house`.
- `DEPLOY_RESTART_COMMAND` в Secrets: команда перезапуска после выкладки, например `pm2 restart country-house` или `systemctl --user restart country-house`.

После выкладки активный релиз доступен в `$DEPLOY_PATH/current`. На сервере должен быть установлен Node.js 22 или совместимая версия.

## Scripts

```bash
npm run dev
npm run typecheck
npm run build
npm run start
```

## Deploy Notes

Workflow деплоя переносит на сервер `.next`, `public`, `package.json`, `package-lock.json` и `next.config.ts`, затем выполняет `npm ci --omit=dev` и переключает symlink `current` на новый релиз.

Минимальный пример systemd-сервиса:

```ini
[Unit]
Description=Country House Next.js
After=network.target

[Service]
WorkingDirectory=/var/www/country-house/current
ExecStart=/usr/bin/npm run start -- -p 3000
Restart=always
Environment=NODE_ENV=production
Environment=NEXT_PUBLIC_SITE_URL=https://country-house-tlt.ru

[Install]
WantedBy=default.target
```
