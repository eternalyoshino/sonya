# Telegram Mini App - Романтическое приложение

Это Telegram Mini App создано на основе Figma-дизайна.

## Подготовка изображений

Перед запуском приложения необходимо подготовить следующие изображения:

1. **Преобразуйте SVG в PNG** - SVG файлы в папке `assets` необходимо преобразовать в PNG формат с теми же именами. Можно использовать онлайн-конвертеры или графические редакторы.

2. **Добавьте фотографии** - В папку `assets` нужно добавить следующие фотографии:
   - `photo.jpg` - фото девушки для пятого экрана
   - `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`, `gallery-5.jpg`, `gallery-6.jpg` - фотографии для галереи на втором экране

## Как использовать

1. Преобразуйте SVG файлы в PNG:
   - `arrow-left.svg` → `arrow-left.png`
   - `arrow-down.svg` → `arrow-down.png`
   - `hearts-bg.svg` → `hearts-bg.png` 
   - `star.svg` → `star.png`

2. Добавьте ваши фотографии в папку `assets`

3. Запустите приложение на вашем веб-сервере с поддержкой HTTPS

4. Настройте Telegram Bot через BotFather и укажите URL вашего Mini App

## Структура проекта

- `index.html` - HTML структура приложения
- `styles.css` - Стили для приложения
- `app.js` - JavaScript функциональность
- `assets/` - Папка с изображениями и ресурсами

## Особенности

- Адаптивный дизайн для мобильных устройств
- Интеграция с Telegram Mini Apps API
- Переключение между экранами
- Интерактивные элементы

## Customization

To match your Figma design:

1. Add the HTML structure that mirrors your design in the `renderApp()` function
2. Add CSS styles to `styles.css` with the exact colors, fonts, and dimensions from Figma
3. Implement any interactive elements in the JavaScript code

## Telegram WebApp Features

This template uses the [Telegram WebApp JS API](https://core.telegram.org/bots/webapps) and includes:

- Automatic theme adaptation (light/dark)
- Main button support
- Data sending capabilities
- Back button handling

## Deployment

Once your implementation is complete, host the files on a secure (HTTPS) web server and configure your Telegram bot to use the URL as a Mini App. 