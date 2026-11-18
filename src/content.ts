export type Lang = "en" | "ru";

export const CV_URL = "/Liubomyr_Myshchenko_CV_EN.pdf";

export const LINKS = {
  telegram: "https://t.me/whyrataff",
  email: "mailto:whyratbtc@gmail.com",
  emailLabel: "whyratbtc@gmail.com",
  linkedin: "https://www.linkedin.com/in/whyrataff/",
};

type Job = {
  period: string;
  role: string;
  company: string;
  points: string[];
};

type Content = {
  nav: { exp: string; projects: string; stack: string; contact: string };
  hero: {
    status: string;
    lead: string;
    ctaPrimary: string;
    ctaCv: string;
  };
  stats: { value: string; label: string }[];
  about: { label: string; title: string; text: string };
  exp: { label: string; jobs: Job[] };
  projects: { label: string; title: string; text: string; tags: string[] };
  stack: { label: string; groups: { title: string; items: string[] }[] };
  contact: { label: string; title: string; text: string };
  footer: string;
};

const stackGroups = {
  en: [
    "AI development & automation",
    "Generative AI & creative",
    "Performance marketing",
    "Analytics & infrastructure",
    "Technical",
  ],
  ru: [
    "AI-разработка и автоматизация",
    "Генеративный AI и креатив",
    "Performance-маркетинг",
    "Аналитика и инфраструктура",
    "Технический стек",
  ],
};

const stackItems = [
  ["AI applications", "Node-based workflows", "Sequential generation", "AI-assisted development", "Content automation"],
  ["Seedance 2.5", "WAN 3.0", "Prompt engineering", "AI image & video", "AI UGC", "Photoshop", "After Effects"],
  ["Meta Ads", "Google Ads", "TikTok Ads", "Creative testing", "iGaming", "Nutra", "AI Companion"],
  ["CPA · CPL · FTD", "ROI · CTR · CPM", "Keitaro", "PWA / WebView", "Conversion tracking"],
  ["HTML", "CSS", "JavaScript", "Node.js"],
];

export const content: Record<Lang, Content> = {
  en: {
    nav: { exp: "Experience", projects: "Projects", stack: "Stack", contact: "Contact" },
    hero: {
      status: "Open to offers · Remote · Ukraine / Europe",
      lead: "I launch and scale paid traffic on Meta, Google and TikTok, and build AI pipelines that generate the video and creatives for it.",
      ctaPrimary: "Message on Telegram",
      ctaCv: "Download CV (PDF)",
    },
    stats: [
      { value: "$20K+", label: "Monthly Meta Ads spend" },
      { value: "2022", label: "In digital advertising since" },
      { value: "T1–T3", label: "GEOs in iGaming" },
      { value: "3", label: "Meta · Google · TikTok" },
    ],
    about: {
      label: "About",
      title: "Media buying and AI engineering in one person.",
      text: "Media Buyer and AI Developer with experience across performance marketing, conversion-focused creative production and AI workflow automation. Active in digital advertising since 2022 and an early adopter of generative AI since late 2022. I combine hands-on campaign execution with building AI-powered apps and multi-step pipelines for image and video production.",
    },
    exp: {
      label: "Experience",
      jobs: [
        {
          period: "03.2026 — 09.2026",
          role: "Media Buyer / AI Creative & Workflow Developer",
          company: "WILLTAG",
          points: [
            "Launched, tested and optimized Meta Ads campaigns, built creative hypotheses and improved acquisition funnels.",
            "Produced AI video ads with Seedance 2.5 and WAN 3.0: from UGC concepts and scripts to multi-scene sequences and localization.",
            "Built repeatable prompt-engineering workflows for consistent, controllable image and video output.",
            "Built a custom node-based AI app that orchestrates sequential generation, multi-stage processing and delivery to external platforms.",
          ],
        },
        {
          period: "04.2024 — 12.2025",
          role: "Media Buyer · iGaming / Performance",
          company: "Private affiliate team",
          points: [
            "Ran campaigns on Meta, Google and TikTok Ads: setup, testing, optimization and performance analysis.",
            "Gambling & Betting across Tier 1–3 GEOs with Meta Ads spend above $20,000 per month.",
            "Tracked CPA, FTD, CTR, CPM and ROI; worked with conversion tracking and PWA / WebView assets.",
            "Set up and maintained tracking, integrations and traffic-routing infrastructure.",
          ],
        },
        {
          period: "01.2022 — 03.2024",
          role: "Creative Designer / AI-Assisted Production",
          company: "Freelance",
          points: [
            "Created static and video ads for the gambling vertical: concepts, visual hooks, motion graphics and GEO adaptations.",
            "Brought generative AI into the creative process from late 2022: research, scripts, visuals and ad variations.",
            "Produced design and motion assets in Photoshop and After Effects, iterating on campaign feedback.",
          ],
        },
      ],
    },
    projects: {
      label: "Selected project",
      title: "AI Companion",
      text: "Developed and launched Meta Ads campaigns, AI-powered UGC creatives, video scripts and acquisition concepts for consumer AI products.",
      tags: ["Meta Ads", "AI UGC", "Video scripts", "Acquisition"],
    },
    stack: {
      label: "Stack",
      groups: stackGroups.en.map((title, i) => ({ title, items: stackItems[i] })),
    },
    contact: {
      label: "Contact",
      title: "Let's build your next traffic pipeline.",
      text: "Fastest reply is on Telegram. Email and LinkedIn work too.",
    },
    footer: "Liubomyr Myshchenko",
  },
  ru: {
    nav: { exp: "Опыт", projects: "Проекты", stack: "Стек", contact: "Контакт" },
    hero: {
      status: "Открыт к предложениям · Remote · Украина / Европа",
      lead: "Запускаю и масштабирую рекламу в Meta, Google и TikTok и строю AI-пайплайны, которые сами генерируют для неё видео и креативы.",
      ctaPrimary: "Написать в Telegram",
      ctaCv: "Скачать CV (PDF)",
    },
    stats: [
      { value: "$20K+", label: "Спенд Meta Ads в месяц" },
      { value: "2022", label: "В digital-рекламе с" },
      { value: "T1–T3", label: "GEO в iGaming" },
      { value: "3", label: "Meta · Google · TikTok" },
    ],
    about: {
      label: "Обо мне",
      title: "Медиабаинг и AI-разработка в одном человеке.",
      text: "Media Buyer и AI-разработчик с опытом в performance-маркетинге, продакшене конверсионных креативов и автоматизации AI-процессов. В digital-рекламе с 2022 года, генеративный AI использую с конца 2022. Совмещаю ведение кампаний руками с разработкой AI-приложений и многошаговых пайплайнов для генерации изображений и видео.",
    },
    exp: {
      label: "Опыт",
      jobs: [
        {
          period: "03.2026 — 09.2026",
          role: "Media Buyer / AI Creative & Workflow Developer",
          company: "WILLTAG",
          points: [
            "Запускал, тестировал и оптимизировал кампании в Meta Ads, строил креативные гипотезы и улучшал воронки.",
            "Делал AI-видеорекламу на Seedance 2.5 и WAN 3.0: от UGC-концепций и сценариев до многосценовых роликов и локализации.",
            "Выстроил повторяемые процессы промпт-инжиниринга для стабильного и управляемого результата.",
            "Разработал своё node-based AI-приложение: последовательная генерация, многоэтапная обработка и доставка готовых ассетов на внешние платформы.",
          ],
        },
        {
          period: "04.2024 — 12.2025",
          role: "Media Buyer · iGaming / Performance",
          company: "Частная арбитражная команда",
          points: [
            "Вёл кампании в Meta, Google и TikTok Ads: настройка, тесты, оптимизация, аналитика.",
            "Gambling и Betting на Tier 1–3 GEO, спенд в Meta Ads больше $20 000 в месяц.",
            "Следил за CPA, FTD, CTR, CPM и ROI; работал с трекингом конверсий и PWA / WebView.",
            "Настраивал и поддерживал трекинг, интеграции и инфраструктуру маршрутизации трафика.",
          ],
        },
        {
          period: "01.2022 — 03.2024",
          role: "Creative Designer / AI-Assisted Production",
          company: "Фриланс",
          points: [
            "Делал статику и видео для gambling-вертикали: концепции, визуальные хуки, моушн и адаптации под GEO.",
            "С конца 2022 встроил генеративный AI в процесс: ресёрч, сценарии, визуал и вариации креативов.",
            "Создавал дизайн и моушн в Photoshop и After Effects, дорабатывая по фидбеку кампаний.",
          ],
        },
      ],
    },
    projects: {
      label: "Проект",
      title: "AI Companion",
      text: "Разработал и запустил кампании в Meta Ads, AI-UGC-креативы, видеосценарии и концепции привлечения для потребительских AI-продуктов.",
      tags: ["Meta Ads", "AI UGC", "Видеосценарии", "Acquisition"],
    },
    stack: {
      label: "Стек",
      groups: stackGroups.ru.map((title, i) => ({ title, items: stackItems[i] })),
    },
    contact: {
      label: "Контакт",
      title: "Соберём ваш следующий пайплайн трафика.",
      text: "Быстрее всего отвечаю в Telegram. Почта и LinkedIn тоже работают.",
    },
    footer: "Любомир Мищенко",
  },
};
