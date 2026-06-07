import Image from "next/image";
import HomeReserveWidgets from "./components/HomeReserveWidgets";

const navItems = [
  ["Бронирование", "#booking"],
  ["Апартаменты", "#apartments"],
  ["О нас", "#about"],
  ["Частые вопросы", "#faq"],
  ["Правила", "#rules"],
  ["Контакты", "#contacts"],
];

const apartmentCards = [
  {
    title: "Апартамент 01",
    image: "/Спальня1_35.jpg",
    text: "Классический интерьер с историческими деталями, камином и атмосферой частного дома.",
  },
  {
    title: "Апартамент 02",
    image: "/Ванная_01.jpg",
    text: "Просторная ванная на двоих с джакузи и все, что нужно для спокойного отдыха.",
  },
  {
    title: "Апартамент 03",
    image: "/Спальня1_04.jpg",
    text: "Уютная спальня, свежее белье и продуманное оснащение для коротких и длинных поездок.",
  },
];

const serviceItems = [
  {
    title: "Спальня",
    text: "Удобные кровати с ортопедическими матрасами и качественным свежим бельем гарантируют отличный отдых и комфортный сон.",
  },
  {
    title: "Кухня",
    text: "Все необходимое позволит приготовить еду не выходя из дома: посуда, бокалы, кастрюли, сковороды, масло, соль, перец.",
  },
  {
    title: "Ванная",
    text: "Гель для душа, мыло, шампунь, фен, свежие полотенца, а также горячая вода без перебоев обеспечат комфорт в ванной.",
  },
  {
    title: "Эстетика",
    text: "Все наши интерьеры сделаны в классическом стиле с историческими элементами, что делает их уникальными.",
  },
  {
    title: "Техника",
    text: "Мы предоставляем все необходимое для комфортного проживания: телевизор, холодильник, стиральная машина, СВЧ и другая техника.",
  },
  {
    title: "Свежий образ",
    text: "В апартаментах есть стиральная машина, утюг, гладильная доска и вместительные платяные шкафы для одежды.",
  },
];

const faqItems = [
  {
    question: "Как забронировать и оплатить апартаменты в Тольятти?",
    answer:
      "На главной странице в блоке со списком апартаментов выберите интересующие даты, затем доступные апартаменты. Внесите 100% предоплату за первые сутки и ожидайте подтверждение по почте.",
  },
  {
    question: "Какие правила отмены бронирования?",
    answer:
      "Бронирование невозможно отменить без штрафа. Сумма удержания составляет 100% стоимости предоплаты.",
  },
  {
    question: "Нужно ли вносить залог за сохранность?",
    answer:
      "При заселении мы подписываем краткосрочный договор аренды, где будет указано внесение депозита 3 000 ₽. Депозит возвращается в полном объеме в день выезда при отсутствии нарушений правил и ущерба имуществу.",
  },
  {
    question: "Что происходит после бронирования апартаментов?",
    answer:
      "Мы связываемся с вами в кратчайшие сроки для подтверждения бронирования и предоставления всей необходимой информации.",
  },
  {
    question: "Как происходит заселение и выселение?",
    answer:
      "Мы встретим вас в удобное время в апартаментах, передадим ключи и ответим на вопросы по проживанию. Также предусмотрено бесконтактное вселение: в день заезда вы получите инструкцию в мессенджере.",
  },
  {
    question: "Доступен ли ранний заезд и поздний выезд?",
    answer:
      "Если в день заезда квартира не будет занята или гости выедут раньше стандартного времени, мы предоставим ранний заезд бесплатно. Начиная с 12:00 вы можете оставить багаж, забрать ключи и пойти на прогулку, пока мы готовим чистоту и уют.",
  },
  {
    question: "Есть ли парковка?",
    answer:
      "Парковка открытая: вы можете оставить машину под окнами апартаментов. По периметру дома установлены камеры видеонаблюдения.",
  },
  {
    question: "Что делать, если я что-то сломал?",
    answer:
      "Мы ко всему относимся с пониманием. Если что-то было сломано, разбито или испорчено, пожалуйста, свяжитесь с нами. Мы обязательно найдем решение.",
  },
];

const ruleItems = [
  {
    title: "Заезд и выезд",
    text: "Заезд гостей осуществляется после 14:00, выезд до 12:00. С 12:00 в апартаментах можно оставить багаж и забрать ключи у администратора.",
  },
  {
    title: "Договор",
    text: "При заселении мы просим гостей подписать стандартный краткосрочный договор аренды, аналогичный документу при заселении в гостиницу.",
  },
  {
    title: "Курение",
    text: "Country House - территория, свободная от дыма. Курение запрещено во всей квартире, включая балкон, электронные устройства и кальяны.",
  },
  {
    title: "Депозит",
    text: "Депозит 3 000 ₽ вносится при заселении и возвращается в день выезда на карту при отсутствии ущерба и соблюдении правил.",
  },
  {
    title: "Отмена",
    text: "При отмене брони оплата, внесенная за первые сутки, не возвращается.",
  },
  {
    title: "Вечеринки",
    text: "Апартаменты не предназначены для вечеринок, мероприятий и шумных посиделок. В городе запрещено шуметь с 22:00 до 08:00.",
  },
  {
    title: "Питомцы",
    text: "К сожалению, мы не принимаем гостей с любыми домашними животными.",
  },
];

const locationItems = [
  "Набережная и городской пляж",
  "Спортивный комплекс «Олимп»",
  "Атлетический комплекс им. Немова",
  "Футбольная академия им. Коноплева",
  "Парк Победы",
  "Стадион «Торпедо»",
  "Дворец спорта «Волгарь»",
  "ТЦ «Русь на Волге», ТЦ «Вега», завод АвтоВАЗ",
];

const contactLinks = [
  {
    label: "Позвонить",
    href: "tel:+79276116560",
    icon: "phone",
    external: false,
  },
  {
    label: "Telegram",
    href: "https://t.me/+79276116560",
    icon: "telegram",
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=79276116560",
    icon: "whatsapp",
    external: true,
  },
  {
    label: "MAX",
    href: "https://max.ru/",
    icon: "max",
    external: true,
  },
];

function ContactIcon({ icon }: { icon: string }) {
  if (icon === "telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.8 4.3 3.9 10.8c-1.1.4-1.1 1.1-.2 1.4l4.3 1.3 1.7 5.2c.2.6.4.8.8.8s.6-.2.9-.5l2.1-2 4.4 3.2c.8.4 1.3.2 1.5-.8L22 5.7c.3-1.1-.4-1.7-1.2-1.4Zm-3.1 3.1-8.4 7.6-.3 3-1.2-4 9.9-6.6Z" />
      </svg>
    );
  }

  if (icon === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.2a8.6 8.6 0 0 0-7.4 13L3.5 20.8l4.7-1.1A8.6 8.6 0 1 0 12 3.2Zm0 15.7c-1.3 0-2.6-.4-3.7-1l-.3-.2-2.6.6.7-2.5-.2-.3a7 7 0 1 1 6.1 3.4Zm3.8-5.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.3-1.3-1.5-.1-.2 0-.3.1-.5l.4-.4c.1-.2.2-.3.3-.5.1-.1 0-.3 0-.4l-.6-1.4c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.7-.8 1.8 0 1 .8 2.1.9 2.2.1.1 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.5-.3Z" />
      </svg>
    );
  }

  if (icon === "max") {
    return <span className="max-icon" aria-hidden="true">M</span>;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 4.2c.4-.4 1-.4 1.4 0l2.2 2.2c.3.3.4.8.2 1.2l-.9 1.8c.9 1.8 2.4 3.3 4.2 4.2l1.8-.9c.4-.2.9-.1 1.2.2l2.2 2.2c.4.4.4 1 0 1.4l-1.3 1.3c-.8.8-2 1.1-3.1.7-4.4-1.4-7.9-4.9-9.3-9.3-.4-1.1-.1-2.3.7-3.1l.7-.9Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Country House">
          <Image
            src="/country_house_logo_transparent.png"
            alt=""
            width={96}
            height={98}
            priority
          />
          <span>Country House</span>
        </a>
        <nav className="site-nav" aria-label="Основная навигация">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/Спальня1_35.jpg"
          alt="Спальня апартаментов Country House"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Апартаменты в Тольятти</p>
          <h1>Country House</h1>
          <p>
            Особый сервис при домашнем уюте: три авторских апартамента в одной
            из лучших локаций города.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#apartments">
              Выбрать апартаменты
            </a>
            <a className="button button-secondary" href="#contacts">
              Связаться с нами
            </a>
          </div>
        </div>
        <div className="booking-strip" aria-label="Преимущества бронирования">
          <span>Для частных и юридических лиц</span>
          <span>Отчетные документы</span>
          <span>Депозит 3 000 ₽</span>
          <span>Заезд после 14:00</span>
        </div>
      </section>

      <HomeReserveWidgets />

      <section className="section apartments-section" id="apartments">
        <div className="section-heading">
          <p className="eyebrow">Апартаменты</p>
          <h2>Три интерьера с классическим характером</h2>
          <p>
            Все апартаменты находятся по одному адресу, оснащены просторными
            ваннами на двоих с джакузи и каминами.
          </p>
        </div>
        <div className="apartments-grid">
          {apartmentCards.map((item) => (
            <article className="apartment-card" key={item.title}>
              <div className="apartment-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="apartment-content">
                <p>Country House</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="video-showcase">
          <div className="video-showcase-copy">
            <p className="eyebrow">Видеообзор</p>
            <h3>Атмосфера Country House в движении</h3>
            <p>
              Посмотрите детали интерьера, настроение пространства и тот самый
              домашний уют до бронирования.
            </p>
          </div>
          <video
            aria-label="Видеообзор апартаментов Country House"
            autoPlay
            controls
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/media-apart-preview.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="section service-section">
        <div className="section-heading compact">
          <p className="eyebrow">Сервис</p>
          <h2>Особый сервис при домашнем уюте</h2>
          <p>
            Работаем с физическими и юридическими лицами компаний. Оформляем
            полный пакет отчетных документов.
          </p>
        </div>
        <div className="service-grid">
          {serviceItems.map((item, index) => (
            <article className="service-item" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div className="about-image">
          <Image
            src="/Ванная_08.jpg"
            alt="Ванная комната с джакузи в Country House"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
        <div className="about-content">
          <p className="eyebrow">О нас</p>
          <h2>Семейный проект с атмосферой уюта и вдохновения</h2>
          <p>
            COUNTRY HOUSE объединяет три авторских апартамента, расположенных по
            одному адресу. Каждый интерьер выполнен в классическом стиле с
            историческими элементами. Особое внимание мы уделяем чистоте и
            оснащению наших объектов.
          </p>
          <div className="about-stats">
            <div>
              <strong>3</strong>
              <span>авторских апартамента</span>
            </div>
            <div>
              <strong>5 мин</strong>
              <span>до ключевых мест города</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>комфортное бесконтактное заселение</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="section-heading">
          <p className="eyebrow">Расположение</p>
          <h2>Все важное рядом</h2>
          <p>
            Апартаменты находятся в одной из лучших локаций города. В шаговой
            доступности - продуктовые магазины, кафе и аптеки.
          </p>
        </div>
        <div className="location-list">
          {locationItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Нас часто спрашивают</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details key={item.question} className="faq-item">
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.question}
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section rules-section" id="rules">
        <div className="section-heading">
          <p className="eyebrow">Правила</p>
          <h2>Наши правила</h2>
          <p>
            Мы ценим и уважаем гостей. Эти правила помогают поддерживать
            стабильно высокий уровень сервиса и комфорта.
          </p>
        </div>
        <div className="rules-grid">
          {ruleItems.map((item) => (
            <article className="rule-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacts">
        <div className="contact-content">
          <p className="eyebrow">Связаться с нами</p>
          <h2>Будем рады видеть вас в числе наших гостей</h2>
          <p>
            Country House - место, куда хочется возвращаться.
            <span className="contact-phone">+7 927 611-65-60</span>
          </p>
          <div className="contact-actions">
            {contactLinks.map((link, index) => (
              <a
                className={`button contact-link ${
                  index === 0 ? "button-primary" : "button-secondary"
                }`}
                href={link.href}
                key={link.label}
                rel={link.external ? "noopener noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                <ContactIcon icon={link.icon} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Country House</span>
        <a href="#top">Наверх</a>
      </footer>
    </main>
  );
}
