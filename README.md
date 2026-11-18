This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Продвижение и аналитика

Канонический адрес – `https://vrach-cosm.ru`. Next.js публикует `/robots.txt` и `/sitemap.xml`.

| Переменная сборки | Значение |
| --- | --- |
| `YANDEX_METRIKA_ID` | Номер счётчика Яндекс Метрики. Создай цель типа «Целевое событие» с идентификатором `phone_click`. Она фиксирует нажатия на телефон записи. |
| `GOOGLE_SITE_VERIFICATION` | Значение `content` из метатега Google Search Console. Для HTML-тега выбирай ресурс с префиксом URL `https://vrach-cosm.ru/`. |
| `YANDEX_SITE_VERIFICATION` | Значение `content` из метатега подтверждения Яндекс Вебмастера. |

Для локального запуска укажи значения в `.env.local`. При сборке Docker передай каждое значение как `--build-arg ИМЯ=значение`. Страницы генерируются при сборке, поэтому после изменения значений пересобери образ. Все три значения публикуются на сайте.

После выкладки проверь метатеги в `<head>` главной, подтверди права в обоих кабинетах и отправь `https://vrach-cosm.ru/sitemap.xml`. Для проверки Метрики открой сайт с `?_ym_debug=2`, прими аналитические cookie, перейди на другую страницу и нажми кнопку записи. Проверь просмотр и событие `phone_click` в отладчике Метрики.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
