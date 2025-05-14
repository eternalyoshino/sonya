// Initialize Telegram WebApp
const tg = window.Telegram.WebApp;

// Enable closing confirmations if needed
// tg.enableClosingConfirmation();

// Expand the WebApp to fullscreen
tg.expand();

// Main application code
document.addEventListener('DOMContentLoaded', function() {
    // Get main colors from Telegram theme
    const mainButton = tg.MainButton;
    const backgroundColor = tg.themeParams.bg_color;
    const textColor = tg.themeParams.text_color;
    const buttonColor = tg.themeParams.button_color;
    const buttonTextColor = tg.themeParams.button_text_color;
    
    // Инициализация приложения
    initApp();
    
    // Добавление обработчиков событий для кнопок
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextScreen = this.getAttribute('data-next');
            if (nextScreen) {
                showScreen(nextScreen);
            }
        });
    });
    
    // Добавление обработчиков событий для элементов меню
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const screenId = this.getAttribute('data-screen');
            if (screenId) {
                showScreen(screenId);
            }
        });
    });
});

// Инициализация приложения
function initApp() {
    // Создание анимированных сердечек на первом экране
    createHearts();
    
    // Заполнение галереи изображениями
    populateGallery();
}

// Функция для создания анимированных сердечек
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    
    // Создаем DOM-элементы для сердечек из дизайна
    const hearts = `
        <svg width="200" height="100" viewBox="0 0 200 100">
            <path d="M25,35 Q35,20 45,35 T65,35 Q65,50 45,65 T25,35" fill="#e05555" />
            <path d="M65,25 Q75,10 85,25 T105,25 Q105,40 85,55 T65,25" fill="#e05555" />
            <path d="M45,45 Q55,30 65,45 T85,45 Q85,60 65,75 T45,45" fill="#e05555" />
            <path d="M85,35 Q95,20 105,35 T125,35 Q125,50 105,65 T85,35" fill="#e05555" />
            <path d="M105,45 Q115,30 125,45 T145,45 Q145,60 125,75 T105,45" fill="#e05555" />
            <path d="M15,55 Q25,40 35,55 T55,55 Q55,70 35,85 T15,55" fill="#e05555" />
            <path d="M125,25 Q135,10 145,25 T165,25 Q165,40 145,55 T125,25" fill="#e05555" />
            <path d="M145,45 Q155,30 165,45 T185,45 Q185,60 165,75 T145,45" fill="#e05555" />
        </svg>
    `;
    
    heartsContainer.innerHTML = hearts;
}

// Функция для заполнения галереи изображениями
function populateGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Добавляем изображения в галерею
    // Замените names на реальные имена файлов после их создания
    const images = [
        'gallery-1.jpg',
        'gallery-2.jpg',
        'gallery-3.jpg',
        'gallery-4.jpg',
        'gallery-5.jpg',
        'gallery-6.jpg'
    ];
    
    let galleryHTML = '';
    images.forEach(image => {
        galleryHTML += `<img src="assets/${image}" alt="Фото из галереи">`;
    });
    
    galleryContainer.innerHTML = galleryHTML;
}

// Функция для переключения экранов
function showScreen(screenId) {
    // Скрыть все экраны
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать нужный экран
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Функция для отправки данных в Telegram
function sendDataToTelegram(data) {
    tg.sendData(JSON.stringify(data));
} 