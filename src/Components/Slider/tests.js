export const tests = [
    {
        id: 1,
        question: "Что такое HTML и для чего он нужен?",
        answers: [
            {
                answerOne: "Это язык гипертекстовой разметки (HyperText Markup Language). Это стандартизированный язык, позволяющий создавать веб-страницы.",
                checkOne: true,
            },
            {
                answerTwo: "Язык программирования, который позволяет создавать динамически обновляемый контент.",
                checkTwo: false,
            },
            {
                answerThree: "Строго типизированный объектно-ориентированный язык программирования общего назначения.",
                checkThree: false,
            },
            {
                answerFour: "Строго типизированный объектно-ориентированный язык программирования общего назначения.",
                checkFour: false,
            },
        ]

    },
    {
        id: 2,
        question: "Какие глобальные атрибуты есть в HTML?",
        answers: [
            {
                answerOne: "class, title, style, aria-*, onclick",
                checkOne: true,
            },
            {
                answerTwo: "label, max, min, multiple",
                checkTwo: false,
            },
            {
                answerThree: "name, pattern, placeholder, required",
                checkThree: false,
            },
            {
                answerFour: "selected, size, src, summary, type",
                checkFour: false,
            },
        ]

    },
    {
        id: 3,
        question: "Назовите количество основных типов категорий контента?",
        answers: [
            {
                answerOne: "2 типа: основные категории контента, категории контента для элементов форм, Особые категории контента.",
                checkOne: false,
            },
            {
                answerTwo: "3 типа: Основные категории контента; Категории контента для элементов форм; Особые категории контента, описывающие редкие категории, актуальные только для нескольких элементов.",
                checkTwo: true,
            },
            {
                answerThree: '4 типа: Первичные категории контента; Вторичные категории контента; Основные категории контента; Категории контента для элементов форм;',
                checkThree: false,
            },
            {
                answerFour: '5 типов: Первичные категории контента; Вторичные категории контента; Основные категории контента; Категории контента для элементов форм; Особые категории контента, описывающие редкие категории, актуальные только для нескольких элементов.',
                checkFour: false,
            },
        ]

    },
    {
        id: 4,
        question: "Основные категории контента:",
        answers: [
            {
                answerOne: "Встроенный контент, Метаданные, Потоковый контент, Секционный контент.",
                checkOne: false,
            },
            {
                answerTwo: "Встроенный контент, Интерактивный контент, Явный контент, Контент форм.",
                checkTwo: false,
            },
            {
                answerThree: 'Метаданные, Потоковый контент, Секционный контент, Заголовочный контент, Фразовый контент, Встроенный контент, Интерактивный контент, Явный контент, Контент форм',
                checkThree: true,
            },
            {
                answerFour: 'Метаданные, Потоковый контент, Секционный контент, Заголовочный контент, Фразовый контент,',
                checkFour: false,
            },
        ]

    },
    {
        id: 5,
        question: "Для чего служит doctype?",
        answers: [
            {
                answerOne: "Для обозначения основного тела документа",
                checkOne: false,
            },
            {
                answerTwo: "Для указания типа документа браузеру",
                checkTwo: true,
            },
            {
                answerThree: "Для связи html и css-документов",
                checkThree: false,
            },
            {
                answerFour: "Для подключения шрифтов в документе",
                checkFour: false,
            },
        ]

    },
    /*{
        id: 6,
        question: "Какие три тега являются обязательными для создания минимально допустимой HTML-страницы?",
        answers: [
            {
                answerOne: "section ,h1, article",
                checkOne: false,
            },
            {
                answerTwo: "header, main, footer",
                checkTwo: false,
            },
            {
                answerThree: "nav, a, head",
                checkThree: false,
            },
            {
                answerFour: "html, head, body",
                checkFour: true,
            },
        ]

    },
    {
        id: 7,
        question: "Что такое валидация?",
        answers: [
            {
                answerOne: "Проверка документа специальной программой валидатором на соответствие установленным веб-стандартам и обнаружение ошибок.",
                checkOne: true,
            },
            {
                answerTwo: "Программный интерфейс, то есть описание способов взаимодействия одной компьютерной программы с другими.",
                checkTwo: false,
            },
            {
                answerThree: "Расширение протокола HTTP для поддержки шифрования в целях повышения безопасности.",
                checkThree: false,
            },
            {
                answerFour: "Признак, приписываемое качество, свойство",
                checkFour: false,
            },
        ]

    },
    {
        id: 8,
        question: "Сколько и какие типы проверок HTML документа существуют?",
        answers: [
            {
                answerOne: "1 тип проверки: валидация HTML документа",
                checkOne: false,
            },
            {
                answerTwo: "2 типа проверок: валидация HTML и CSS документа",
                checkTwo: false,
            },
            {
                answerThree: "4 типа проверки: проверка синтаксиса, проверка вложенности, проверка dtd, проверка на наличие посторонних элементов.",
                checkThree: true,
            },
            {
                answerFour: "3 типа проверки: проверка синтаксиса, проверка вложенности, валидация HTML документа",
                checkFour: false,
            },
        ]

    },
    {
        id: 9,
        question: "Основные этапы проверок валидности HTML-документа?",
        answers: [
            {
                answerOne: "Валидация HTML, валидация CSS, валидация ссылок, валидация адаптивности, проверка синтаксиса кода",
                checkOne: true,
            },
            {
                answerTwo: "Валидация HTML, валидация картинок, валидация JavaScript кода, проверка React кода",
                checkTwo: false,
            },
            {
                answerThree: "Валидация HTML, валидация CSS, проверка расширением Prittier",
                checkThree: false,
            },
            {
                answerFour: "Валидация HTML, валидация CSS",
                checkFour: false,
            },
        ]

    },
    {
        id: 10,
        question: "Какие из описанных ниже блоков отностятся к HTML5 ?",
        answers: [
            {
                answerOne: "2D/3D-графика и эффекты, стилизация, семантика.",
                checkOne: false,
            },
            {
                answerTwo: "Офлайн и хранилище, мультимедиа.",
                checkTwo: false,
            },
            {
                answerThree: " Производительность, интеграция, доступ к устройствам.",
                checkThree: false,
            },
            {
                answerFour: "Все варианты правильные",
                checkFour: true,
            },
        ]

    },
    {
        id: 11,
        question: "Какой тэг использовать для того, чтобы сверстать кнопку?",
        answers: [
            {
                answerOne: " <strong>",
                checkOne: false,
            },
            {
                answerTwo: "<button>, <input>, <a>",
                checkTwo: true,
            },
            {
                answerThree: "<h1>, <nav>",
                checkThree: false,
            },
            {
                answerFour: "<ul>, <li>",
                checkFour: false,
            },
        ]

    },
    {
        id: 12,
        question: "Что такое инлайновый стиль?",
        answers: [
            {
                answerOne: "Стиль прописанный в отдельном файле CSS",
                checkOne: false,
            },
            {
                answerTwo: "Стиль прописанный в файле HTML над тегом <html>",
                checkTwo: false,
            },
            {
                answerThree: "Cтиль прописаннный не в отдельном файле/блоке, а непосредственно в коде.",
                checkThree: true,
            },
            {
                answerFour: "Стиль прописанный при помощи препроцессора SASS",
                checkFour: false,
            },
        ]

    },
    {
        id: 13,
        question: "Можно ли переопределить инлайновый стиль?",
        answers: [
            {
                answerOne: "Переопределить его можно только при помощи атрибута !important ",
                checkOne: true,
            },
            {
                answerTwo: "Переопределить нельзя",
                checkTwo: false,
            },
            {
                answerThree: "Можно переопределить если прописать его над тегом <html>",
                checkThree: false,
            },
            {
                answerFour: "Можно переопределить используя атрибут style внутри тега",
                checkFour: false,
            },
        ]

    },
    {
        id: 14,
        question: "Есть ли у HTML элементов свои дефолтные специфичные стили?",
        answers: [
            {
                answerOne: "Да, практически каждый html-элемент обладает набором индивидуальных стилей.",
                checkOne: true,
            },
            {
                answerTwo: "Нет, индивидуальные стили отсутствуют",
                checkTwo: false,
            },
            {
                answerThree: "Да, но их немного",
                checkThree: false,
            },
            {
                answerFour: "Да, информация стиля для одного элемента указывается в его атрибуте style",
                checkFour: false,
            },
        ]

    },
    {
        id: 15,
        question: "Что такое семантика?",
        answers: [
            {
                answerOne: "Это отличительная принадлежность, присвоенный кому-либо или чему-либо, знак, предмет для отличия.",
                checkOne: false,
            },
            {
                answerTwo: "Использование правильных тегов, описывающих содержание контента внутри себя.",
                checkTwo: true,
            },
            {
                answerThree: "Это применение определенного стиля элементов веб-страницы.",
                checkThree: false,
            },
            {
                answerFour: "Язык похожий на HAML, но предназначенный для упрощения создания CSS-кода",
                checkFour: false,
            },
        ]

    },
    {
        id: 16,
        question: "Выберите два не семантических тега:",
        answers: [
            {
                answerOne: "aside, nav",
                checkOne: false,
            },
            {
                answerTwo: "header, footer",
                checkTwo: false,
            },
            {
                answerThree: "span, div",
                checkThree: true,
            },
            {
                answerFour: "article, section",
                checkFour: false,
            },
        ]

    },
    {
        id: 17,
        question: "Что не относится к типам списков HTML?",
        answers: [
            {
                answerOne: "Маркированные списки (<ul>)",
                checkOne: false,
            },
            {
                answerTwo: "Нумерованные списки (<ol>)",
                checkTwo: false,
            },
            {
                answerThree: "Cписки определений (<dl>)",
                checkThree: false,
            },
            {
                answerFour: "Список пунктов",
                checkFour: true,
            },
        ]

    },
    {
        id: 18,
        question: "Для какого тэга используется атрибут alt и зачем он нужен?",
        answers: [
            {
                answerOne: "Используется для тега img.  Если картинка не отображается, то будет отображаться альтернативный текст.",
                checkOne: true,
            },
            {
                answerTwo: "Используется для тега заголовков h1-h6, для лучшей читаемости заголовков",
                checkTwo: false,
            },
            {
                answerThree: "Используется для тега style для добавления css стилей в html",
                checkThree: false,
            },
            {
                answerFour: "Используется для семантических тегов, для облегчения работы поисковых систем при индексации контента",
                checkFour: false,
            },
        ]

    },
    {
        id: 19,
        question: "Какие теги делают текст жирным?",
        answers: [
            {
                answerOne: "<li>, <ul>",
                checkOne: false,
            },
            {
                answerTwo: "<strong>, <b> ",
                checkTwo: true,
            },
            {
                answerThree: "<em>, <i>",
                checkThree: false,
            },
            {
                answerFour: "<br>, <h1>",
                checkFour: false,
            },
        ]

    },
    {
        id: 20,
        question: "Какие теги делают текст курсивным?",
        answers: [
            {
                answerOne: "<em>, <i>",
                checkOne: true,
            },
            {
                answerTwo: "<h3>, <h4>",
                checkTwo: false,
            },
            {
                answerThree: "<article>, <section>",
                checkThree: false,
            },
            {
                answerFour: "<div>, <span>",
                checkFour: false,
            },
        ]

    },
    {
        id: 21,
        question: "Что из предложенного ниже не является видом <input> элементов в HTML?",
        answers: [
            {
                answerOne: "text, number,",
                checkOne: false,
            },
            {
                answerTwo: "email, checkbox",
                checkTwo: false,
            },
            {
                answerThree: "submit, date",
                checkThree: false,
            },
            {
                answerFour: "style, strong",
                checkFour: true,
            },
        ]

    },
    {
        id: 22,
        question: "Для чего используют data-атрибуты?",
        answers: [
            {
                answerOne: "Для отправки данных на сервер",
                checkOne: false,
            },
            {
                answerTwo: "Для лучшей читаемости семантических тегов",
                checkTwo: false,
            },
            {
                answerThree: "Для хранения различной информации.",
                checkThree: true,
            },
            {
                answerFour: "В настоящее время они не используются.",
                checkFour: false,
            },
        ]

    },
    {
        id: 23,
        question: "Для чего используется элемент <datalist>?",
        answers: [
            {
                answerOne: "Для создания выпадающего списка с возможностью в html нативной реализации автозаполнения.",
                checkOne: true,
            },
            {
                answerTwo: "Для получения данных от пользователя",
                checkTwo: false,
            },
            {
                answerThree: "Для указания поисковым системам содержания страницы",
                checkThree: false,
            },
            {
                answerFour: "Для группировки содержимого страницы, которое связано тематически или по смыслу.",
                checkFour: false,
            },
        ]

    },
    {
        id: 24,
        question: "Почему для подключения CSS стилей тег <link> раполагают внутри тэга <head>?",
        answers: [
            {
                answerOne: "Чтобы как можно раньше показать пользователю хоть какой-то контент, а не белую страницу.",
                checkOne: true,
            },
            {
                answerTwo: "Чтобы не влиять на процессы построения DOM и стилизации элементов",
                checkTwo: false,
            },
            {
                answerThree: "Для встраивания или подключения исполняемого JavaScript кода",
                checkThree: false,
            },
            {
                answerFour: "для размещения всего содержимого, которое отображается на веб-странице",
                checkFour: false,
            },
        ]

    },
    {
        id: 25,
        question: " Почему <script> для подключения JS нужно ставить перед закрывающимся тэгом </body>?",
        answers: [
            {
                answerOne: "Для размещения всего содержимого, которое отображается на веб-странице.",
                checkOne: false,
            },
            {
                answerTwo: "Чтобы как можно раньше показать пользователю хоть какой-то контент, а не белую страницу.",
                checkTwo: false,
            },
            {
                answerThree: "Для того чтобы не влиять на описанные процессы построения DOM и стилизации элементов",
                checkThree: true,
            },
            {
                answerFour: "Для создания интерактивных элементов управления в веб-формах для получения данных от пользователя",
                checkFour: false,
            },
        ]

    },
    {
        id: 26,
        question: "Что такое мета-тэги?",
        answers: [
            {
                answerOne: "Часть программного HTML-кода, заключенная между тегом <head>...</head> (заголовок страницы).",
                checkOne: true,
            },
            {
                answerTwo: "Шаблон, соответствующий определенным элементам HTML-разметки",
                checkTwo: false,
            },
            {
                answerThree: "Это видимая пользователю область веб-страницы",
                checkThree: false,
            },
            {
                answerFour: "HTML элемент, использующийся для рисования графики средствами языков программирования",
                checkFour: false,
            },
        ]

    },
    {
        id: 27,
        question: "Что описывается в тэге <head>?",
        answers: [
            {
                answerOne: "Предназначен для хранения служебной информации о странице.",
                checkOne: true,
            },
            {
                answerTwo: "Cодержит весь контент, который появится на странице.",
                checkTwo: false,
            },
            {
                answerThree: "Содержимое страницы, которое связано тематически или по смыслу.",
                checkThree: false,
            },
            {
                answerFour: "Описывается значение атрибутов",
                checkFour: false,
            },
        ]

    },
    {
        id: 28,
        question: "Что описывается в тэге <head>?",
        answers: [
            {
                answerOne: "Для того чтобы разбить текстовый контент по секциям",
                checkOne: false,
            },
            {
                answerTwo: "Для создания таблицы",
                checkTwo: true,
            },
            {
                answerThree: "Для хранения различной технической информации",
                checkThree: false,
            },
            {
                answerFour: "Для отправки данных пользователя на сервер",
                checkFour: false,
            },
        ]

    },
    {
        id: 29,
        question: "Какого тега не существует для создания таблицы?",
        answers: [
            {
                answerOne: "th",
                checkOne: false,
            },
            {
                answerTwo: "tr",
                checkTwo: false,
            },
            {
                answerThree: "tk",
                checkThree: true,
            },
            {
                answerFour: "td",
                checkFour: false,
            },
        ]

    },
    {
        id: 30,
        question: "Зачем нужен мета-тег viewport?",
        answers: [
            {
                answerOne: "Чтобы сообщить браузеру, как масштабировать и отображать страницу на разных устройствах.",
                checkOne: true,
            },
            {
                answerTwo: "Для группировки непронумерованных элементов данных.",
                checkTwo: false,
            },
            {
                answerThree: "Для создания блоков макета CSS и расположения их в документе.",
                checkThree: false,
            },
            {
                answerFour: "Для группировки элементов в целях стилизации.",
                checkFour: false,
            },
        ]

    },
    {
        id: 31,
        question: "Что такое <canvas>?",
        answers: [
            {
                answerOne: "Язык разметки масштабируемые векторные графики.",
                checkOne: false,
            },
            {
                answerTwo: "Атрибут, содержащий информацию CSS.",
                checkTwo: false,
            },
            {
                answerThree: "HTML-элемент, который содержит машиночитаемую информацию (metadata) о документе, например его заголовок, скрипты и страницы стилей",
                checkThree: false,
            },
            {
                answerFour: "HTML элемент использующийся для рисования графики средствами языков программирования.",
                checkFour: true,
            },
        ]

    },
    {
        id: 32,
        question: "Для чего используется элемент <canvas>?",
        answers: [
            {
                answerOne: "Для создания таблицы.",
                checkOne: false,
            },
            {
                answerTwo: "Для группировки содержимого страницы",
                checkTwo: false,
            },
            {
                answerThree: "Для вставки изображений, градиентов и сложной анимации, отрисовки графики",
                checkThree: true,
            },
            {
                answerFour: "Для задания цветов, шрифтов, стилей, расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц",
                checkFour: false,
            },
        ]

    },
    {
        id: 33,
        question: "Что такое <svg>?",
        answers: [
            {
                answerOne: "HTML элемент использующийся для рисования графики средствами языков программирования.",
                checkOne: false,
            },
            {
                answerTwo: "Язык разметки масштабируемые векторные графики.",
                checkTwo: true,
            },
            {
                answerThree: "Атрибут, содержащий информацию CSS",
                checkThree: false,
            },
            {
                answerFour: "HTML-элемент, который содержит машиночитаемую информацию (metadata) о документе, например его заголовок, скрипты и страницы стилей",
                checkFour: false,
            },
        ]

    },
    {
        id: 34,
        question: "Разница между <canvas> и <svg>?",
        answers: [
            {
                answerOne: "Canvas - это одиночный дом элемент, скриптовый язык. SVG - это набор элементов, язык разметки. ",
                checkOne: true,
            },
            {
                answerTwo: "SVG - это одиночный дом элемент, скриптовый язык. Canvas - это набор элементов, язык разметки.",
                checkTwo: false,
            },
            {
                answerThree: "SVG используется для растровой графики,а  canvas для векторной;",
                checkThree: false,
            },
            {
                answerFour: "Сanvas изображения поддаются сжатию, в то время как SVG с изображением нельзя сжимать.",
                checkFour: false,
            },
        ]

    },
    {
        id: 35,
        question: "В каких случаях лучше использовать <canvas>?",
        answers: [
            {
                answerOne: "Cоздание пользовательских интерфейсов веб-приложений, интерактивных анимированных пользовательских интерфейсов, графиков и диаграмм.",
                checkOne: false,
            },
            {
                answerTwo: "Редактирование изображений, создания растровой и игровой графики, визуализации данных, создания фракталов и графиков функций.",
                checkTwo: true,
            },
            {
                answerThree: "Для добавления разных форматов изображений, не поддерживаемых всеми браузерами.",
                checkThree: false,
            },
            {
                answerFour: "Создание плавных анимаций",
                checkFour: false,
            },
        ]

    },
    {
        id: 36,
        question: "В каких случаях лучше использовать SVG?",
        answers: [
            {
                answerOne: "Редактирование изображений, создания растровой и игровой графики, визуализации данных, создания фракталов и графиков функций.",
                checkOne: false,
            },
            {
                answerTwo: "Создание плавных анимаций",
                checkFour: false,
            },
            {
                answerThree: "Для добавления разных форматов изображений, не поддерживаемых всеми браузерами",
                checkThree: false,
            },
            {
                answerFour: "Cоздание пользовательских интерфейсов веб-приложений, интерактивных анимированных интерфейсов, ",
                checkFour: true,
            },
        ]

    },*/

];
/*
export const tests = [
    {
        id: 1,
        question: "Что такое HTML и для чего он нужен?",
        answerOne: "Это язык гипертекстовой разметки (HyperText Markup Language). Это стандартизированный язык, позволяющий создавать веб-страницы.",
        answerTwo: "Язык программирования, который позволяет создавать динамически обновляемый контент.",
        answerThree: "Строго типизированный объектно-ориентированный язык программирования общего назначения.",
        answerFour: "Строго типизированный объектно-ориентированный язык программирования общего назначения.",
        valueOne: true, 
        valueTwo: false, 
        valueThree: false,
        valueFour: false,
    },
    {
        id: 2,
        question: "Какие глобальные атрибуты есть в HTML?",
        answerOne: "class, title, style, aria-*, onclick",
        check: true,
        answerTwo: "label, max, min, multiple",
        check: false,
        answerThree: "name, pattern, placeholder, required",
        check: false,
        answerFour: "selected, size, src, summary, type",
        check: false,
            
        

    },

]*/