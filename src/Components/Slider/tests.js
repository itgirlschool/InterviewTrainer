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
                check: true,
            },
            {
                answerTwo: "label, max, min, multiple",
                check: false,
            },
            {
                answerThree: "name, pattern, placeholder, required",
                check: false,
            },
            {
                answerFour: "selected, size, src, summary, type",
                check: false,
            },
        ]

    },
    {
        id: 3,
        question: "Назовите количество основных типов категорий контента?",
        answers: [
            {
                answerOne: "2 типа: основные категории контента, категории контента для элементов форм, Особые категории контента.",
                check: false,
            },
            {
                answerTwo: "3 типа: Основные категории контента; Категории контента для элементов форм; Особые категории контента, описывающие редкие категории, актуальные только для нескольких элементов.",
                check: true,
            },
            {
                answerThree: '4 типа: Первичные категории контента; Вторичные категории контента; Основные категории контента; Категории контента для элементов форм;',
                check: false,
            },
            {
                answerFour: '5 типов: Первичные категории контента; Вторичные категории контента; Основные категории контента; Категории контента для элементов форм; Особые категории контента, описывающие редкие категории, актуальные только для нескольких элементов.',
                check: false,
            },
        ]

    },
    {
        id: 4,
        question: "Основные категории контента:",
        answers: [
            {
                answerOne: "Встроенный контент, Метаданные, Потоковый контент, Секционный контент.",
                check: false,
            },
            {
                answerTwo: "Встроенный контент, Интерактивный контент, Явный контент, Контент форм.",
                check: false,
            },
            {
                answerThree: 'Метаданные, Потоковый контент, Секционный контент, Заголовочный контент, Фразовый контент, Встроенный контент, Интерактивный контент, Явный контент, Контент форм',
                check: true,
            },
            {
                answerFour: 'Метаданные, Потоковый контент, Секционный контент, Заголовочный контент, Фразовый контент,',
                check: false,
            },
        ]

    },
    {
        id: 5,
        question: "Для чего служит doctype?",
        answers: [
            {
                answerOne: "Для обозначения основного тела документа",
                check: false,
            },
            {
                answerTwo: "Для указания типа документа браузеру",
                check: true,
            },
            {
                answerThree: "Для связи html и css-документов",
                check: false,
            },
            {
                answerFour: "Для подключения шрифтов в документе",
                check: false,
            },
        ]

    },
    {
        id: 6,
        question: "Какие три тега являются обязательными для создания минимально допустимой HTML-страницы?",
        answers: [
            {
                answerOne: "section ,h1, article",
                check: false,
            },
            {
                answerTwo: "header, main, footer",
                check: false,
            },
            {
                answerThree: "nav, a, head",
                check: false,
            },
            {
                answerFour: "html, head, body",
                check: true,
            },
        ]

    },
    {
        id: 7,
        question: "Что такое валидация?",
        answers: [
            {
                answerOne: "Проверка документа специальной программой валидатором на соответствие установленным веб-стандартам и обнаружение ошибок.",
                check: true,
            },
            {
                answerTwo: "Программный интерфейс, то есть описание способов взаимодействия одной компьютерной программы с другими.",
                check: false,
            },
            {
                answerThree: "Расширение протокола HTTP для поддержки шифрования в целях повышения безопасности.",
                check: false,
            },
            {
                answerFour: "Признак, приписываемое качество, свойство",
                check: false,
            },
        ]

    },
    {
        id: 8,
        question: "Сколько и какие типы проверок HTML документа существуют?",
        answers: [
            {
                answerOne: "1 тип проверки: валидация HTML документа",
                check: false,
            },
            {
                answerTwo: "2 типа проверок: валидация HTML и CSS документа",
                check: false,
            },
            {
                answerThree: "4 типа проверки: проверка синтаксиса, проверка вложенности, проверка dtd, проверка на наличие посторонних элементов.",
                check: true,
            },
            {
                answerFour: "3 типа проверки: проверка синтаксиса, проверка вложенности, валидация HTML документа",
                check: false,
            },
        ]

    },
    {
        id: 9,
        question: "Основные этапы проверок валидности HTML-документа?",
        answers: [
            {
                answerOne: "Валидация HTML, валидация CSS, валидация ссылок, валидация адаптивности, проверка синтаксиса кода",
                check: true,
            },
            {
                answerTwo: "Валидация HTML, валидация картинок, валидация JavaScript кода, проверка React кода",
                check: false,
            },
            {
                answerThree: "Валидация HTML, валидация CSS, проверка расширением Prittier",
                check: false,
            },
            {
                answerFour: "Валидация HTML, валидация CSS",
                check: false,
            },
        ]

    },
    {
        id: 10,
        question: "Какие из описанных ниже блоков отностятся к HTML5 ?",
        answers: [
            {
                answerOne: "2D/3D-графика и эффекты, стилизация, семантика.",
                check: false,
            },
            {
                answerTwo: "Офлайн и хранилище, мультимедиа.",
                check: false,
            },
            {
                answerThree: " Производительность, интеграция, доступ к устройствам.",
                check: false,
            },
            {
                answerFour: "Все варианты правильные",
                check: true,
            },
        ]

    },
    {
        id: 11,
        question: "Какой тэг использовать для того, чтобы сверстать кнопку?",
        answers: [
            {
                answerOne: " <strong>",
                check: false,
            },
            {
                answerTwo: "<button>, <input>, <a>",
                check: true,
            },
            {
                answerThree: "<h1>, <nav>",
                check: false,
            },
            {
                answerFour: "<ul>, <li>",
                check: false,
            },
        ]

    },
    {
        id: 12,
        question: "Что такое инлайновый стиль?",
        answers: [
            {
                answerOne: "Стиль прописанный в отдельном файле CSS",
                check: false,
            },
            {
                answerTwo: "Стиль прописанный в файле HTML над тегом <html>",
                check: false,
            },
            {
                answerThree: "Cтиль прописаннный не в отдельном файле/блоке, а непосредственно в коде.",
                check: true,
            },
            {
                answerFour: "Стиль прописанный при помощи препроцессора SASS",
                check: false,
            },
        ]

    },
    {
        id: 13,
        question: "Можно ли переопределить инлайновый стиль?",
        answers: [
            {
                answerOne: "Переопределить его можно только при помощи атрибута !important ",
                check: true,
            },
            {
                answerTwo: "Переопределить нельзя",
                check: false,
            },
            {
                answerThree: "Можно переопределить если прописать его над тегом <html>",
                check: false,
            },
            {
                answerFour: "Можно переопределить используя атрибут style внутри тега",
                check: false,
            },
        ]

    },
    {
        id: 14,
        question: "Есть ли у HTML элементов свои дефолтные специфичные стили?",
        answers: [
            {
                answerOne: "Да, практически каждый html-элемент обладает набором индивидуальных стилей.",
                check: true,
            },
            {
                answerTwo: "Нет, индивидуальные стили отсутствуют",
                check: false,
            },
            {
                answerThree: "Да, но их немного",
                check: false,
            },
            {
                answerFour: "Да, информация стиля для одного элемента указывается в его атрибуте style",
                check: false,
            },
        ]

    },
    {
        id: 15,
        question: "Что такое семантика?",
        answers: [
            {
                answerOne: "Это отличительная принадлежность, присвоенный кому-либо или чему-либо, знак, предмет для отличия.",
                check: false,
            },
            {
                answerTwo: "Использование правильных тегов, описывающих содержание контента внутри себя.",
                check: true,
            },
            {
                answerThree: "Это применение определенного стиля элементов веб-страницы.",
                check: false,
            },
            {
                answerFour: "Язык похожий на HAML, но предназначенный для упрощения создания CSS-кода",
                check: false,
            },
        ]

    },
    {
        id: 16,
        question: "Выберите два не семантических тега:",
        answers: [
            {
                answerOne: "aside, nav",
                check: false,
            },
            {
                answerTwo: "header, footer",
                check: false,
            },
            {
                answerThree: "span, div",
                check: true,
            },
            {
                answerFour: "article, section",
                check: false,
            },
        ]

    },
    {
        id: 17,
        question: "Что не относится к типам списков HTML?",
        answers: [
            {
                answerOne: "Маркированные списки (<ul>)",
                check: false,
            },
            {
                answerTwo: "Нумерованные списки (<ol>)",
                check: false,
            },
            {
                answerThree: "Cписки определений (<dl>)",
                check: false,
            },
            {
                answerFour: "Список пунктов",
                check: true,
            },
        ]

    },
    {
        id: 18,
        question: "Для какого тэга используется атрибут alt и зачем он нужен?",
        answers: [
            {
                answerOne: "Используется для тега img.  Если картинка не отображается, то будет отображаться альтернативный текст.",
                check: true,
            },
            {
                answerTwo: "Используется для тега заголовков h1-h6, для лучшей читаемости заголовков",
                check: false,
            },
            {
                answerThree: "Используется для тега style для добавления css стилей в html",
                check: false,
            },
            {
                answerFour: "Используется для семантических тегов, для облегчения работы поисковых систем при индексации контента",
                check: false,
            },
        ]

    },
    {
        id: 19,
        question: "Какие теги делают текст жирным?",
        answers: [
            {
                answerOne: "<li>, <ul>",
                check: false,
            },
            {
                answerTwo: "<strong>, <b> ",
                check: true,
            },
            {
                answerThree: "<em>, <i>",
                check: false,
            },
            {
                answerFour: "<br>, <h1>",
                check: false,
            },
        ]

    },
    {
        id: 20,
        question: "Какие теги делают текст курсивным?",
        answers: [
            {
                answerOne: "<em>, <i>",
                check: true,
            },
            {
                answerTwo: "<h3>, <h4>",
                check: false,
            },
            {
                answerThree: "<article>, <section>",
                check: false,
            },
            {
                answerFour: "<div>, <span>",
                check: false,
            },
        ]

    },
    {
        id: 21,
        question: "Что из предложенного ниже не является видом <input> элементов в HTML?",
        answers: [
            {
                answerOne: "text, number,",
                check: false,
            },
            {
                answerTwo: "email, checkbox",
                check: false,
            },
            {
                answerThree: "submit, date",
                check: false,
            },
            {
                answerFour: "style, strong",
                check: true,
            },
        ]

    },
    {
        id: 22,
        question: "Для чего используют data-атрибуты?",
        answers: [
            {
                answerOne: "Для отправки данных на сервер",
                check: false,
            },
            {
                answerTwo: "Для лучшей читаемости семантических тегов",
                check: false,
            },
            {
                answerThree: "Для хранения различной информации.",
                check: true,
            },
            {
                answerFour: "В настоящее время они не используются.",
                check: false,
            },
        ]

    },
    {
        id: 23,
        question: "Для чего используется элемент <datalist>?",
        answers: [
            {
                answerOne: "Для создания выпадающего списка с возможностью в html нативной реализации автозаполнения.",
                check: true,
            },
            {
                answerTwo: "Для получения данных от пользователя",
                check: false,
            },
            {
                answerThree: "Для указания поисковым системам содержания страницы",
                check: false,
            },
            {
                answerFour: "Для группировки содержимого страницы, которое связано тематически или по смыслу.",
                check: false,
            },
        ]

    },
    {
        id: 24,
        question: "Почему для подключения CSS стилей тег <link> раполагают внутри тэга <head>?",
        answers: [
            {
                answerOne: "Чтобы как можно раньше показать пользователю хоть какой-то контент, а не белую страницу.",
                check: true,
            },
            {
                answerTwo: "Чтобы не влиять на процессы построения DOM и стилизации элементов",
                check: false,
            },
            {
                answerThree: "Для встраивания или подключения исполняемого JavaScript кода",
                check: false,
            },
            {
                answerFour: "для размещения всего содержимого, которое отображается на веб-странице",
                check: false,
            },
        ]

    },
    {
        id: 25,
        question: " Почему <script> для подключения JS нужно ставить перед закрывающимся тэгом </body>?",
        answers: [
            {
                answerOne: "Для размещения всего содержимого, которое отображается на веб-странице.",
                check: false,
            },
            {
                answerTwo: "Чтобы как можно раньше показать пользователю хоть какой-то контент, а не белую страницу.",
                check: false,
            },
            {
                answerThree: "Для того чтобы не влиять на описанные процессы построения DOM и стилизации элементов",
                check: true,
            },
            {
                answerFour: "Для создания интерактивных элементов управления в веб-формах для получения данных от пользователя",
                check: false,
            },
        ]

    },
    {
        id: 26,
        question: "Что такое мета-тэги?",
        answers: [
            {
                answerOne: "Часть программного HTML-кода, заключенная между тегом <head>...</head> (заголовок страницы).",
                check: true,
            },
            {
                answerTwo: "Шаблон, соответствующий определенным элементам HTML-разметки",
                check: false,
            },
            {
                answerThree: "Это видимая пользователю область веб-страницы",
                check: false,
            },
            {
                answerFour: "HTML элемент, использующийся для рисования графики средствами языков программирования",
                check: false,
            },
        ]

    },
    {
        id: 27,
        question: "Что описывается в тэге <head>?",
        answers: [
            {
                answerOne: "Предназначен для хранения служебной информации о странице.",
                check: true,
            },
            {
                answerTwo: "Cодержит весь контент, который появится на странице.",
                check: false,
            },
            {
                answerThree: "Содержимое страницы, которое связано тематически или по смыслу.",
                check: false,
            },
            {
                answerFour: "Описывается значение атрибутов",
                check: false,
            },
        ]

    },
    {
        id: 28,
        question: "Что описывается в тэге <head>?",
        answers: [
            {
                answerOne: "Для того чтобы разбить текстовый контент по секциям",
                check: false,
            },
            {
                answerTwo: "Для создания таблицы",
                check: true,
            },
            {
                answerThree: "Для хранения различной технической информации",
                check: false,
            },
            {
                answerFour: "Для отправки данных пользователя на сервер",
                check: false,
            },
        ]

    },
    {
        id: 29,
        question: "Какого тега не существует для создания таблицы?",
        answers: [
            {
                answerOne: "th",
                check: false,
            },
            {
                answerTwo: "tr",
                check: false,
            },
            {
                answerThree: "tk",
                check: true,
            },
            {
                answerFour: "td",
                check: false,
            },
        ]

    },
    {
        id: 30,
        question: "Зачем нужен мета-тег viewport?",
        answers: [
            {
                answerOne: "Чтобы сообщить браузеру, как масштабировать и отображать страницу на разных устройствах.",
                check: true,
            },
            {
                answerTwo: "Для группировки непронумерованных элементов данных.",
                check: false,
            },
            {
                answerThree: "Для создания блоков макета CSS и расположения их в документе.",
                check: false,
            },
            {
                answerFour: "Для группировки элементов в целях стилизации.",
                check: false,
            },
        ]

    },
    {
        id: 31,
        question: "Что такое <canvas>?",
        answers: [
            {
                answerOne: "Язык разметки масштабируемые векторные графики.",
                check: false,
            },
            {
                answerTwo: "Атрибут, содержащий информацию CSS.",
                check: false,
            },
            {
                answerThree: "HTML-элемент, который содержит машиночитаемую информацию (metadata) о документе, например его заголовок, скрипты и страницы стилей",
                check: false,
            },
            {
                answerFour: "HTML элемент использующийся для рисования графики средствами языков программирования.",
                check: true,
            },
        ]

    },
    {
        id: 32,
        question: "Для чего используется элемент <canvas>?",
        answers: [
            {
                answerOne: "Для создания таблицы.",
                check: false,
            },
            {
                answerTwo: "Для группировки содержимого страницы",
                check: false,
            },
            {
                answerThree: "Для вставки изображений, градиентов и сложной анимации, отрисовки графики",
                check: true,
            },
            {
                answerFour: "Для задания цветов, шрифтов, стилей, расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц",
                check: false,
            },
        ]

    },
    {
        id: 33,
        question: "Что такое <svg>?",
        answers: [
            {
                answerOne: "HTML элемент использующийся для рисования графики средствами языков программирования.",
                check: false,
            },
            {
                answerTwo: "Язык разметки масштабируемые векторные графики.",
                check: true,
            },
            {
                answerThree: "Атрибут, содержащий информацию CSS",
                check: false,
            },
            {
                answerFour: "HTML-элемент, который содержит машиночитаемую информацию (metadata) о документе, например его заголовок, скрипты и страницы стилей",
                check: false,
            },
        ]

    },
    {
        id: 34,
        question: "Разница между <canvas> и <svg>?",
        answers: [
            {
                answerOne: "Canvas - это одиночный дом элемент, скриптовый язык. SVG - это набор элементов, язык разметки. ",
                check: true,
            },
            {
                answerTwo: "SVG - это одиночный дом элемент, скриптовый язык. Canvas - это набор элементов, язык разметки.",
                check: false,
            },
            {
                answerThree: "SVG используется для растровой графики,а  canvas для векторной;",
                check: false,
            },
            {
                answerFour: "Сanvas изображения поддаются сжатию, в то время как SVG с изображением нельзя сжимать.",
                check: false,
            },
        ]

    },
    {
        id: 35,
        question: "В каких случаях лучше использовать <canvas>?",
        answers: [
            {
                answerOne: "Cоздание пользовательских интерфейсов веб-приложений, интерактивных анимированных пользовательских интерфейсов, графиков и диаграмм.",
                check: false,
            },
            {
                answerTwo: "Редактирование изображений, создания растровой и игровой графики, визуализации данных, создания фракталов и графиков функций.",
                check: true,
            },
            {
                answerThree: "Для добавления разных форматов изображений, не поддерживаемых всеми браузерами.",
                check: false,
            },
            {
                answerFour: "Создание плавных анимаций",
                check: false,
            },
        ]

    },
    {
        id: 36,
        question: "В каких случаях лучше использовать SVG?",
        answers: [
            {
                answerOne: "Редактирование изображений, создания растровой и игровой графики, визуализации данных, создания фракталов и графиков функций.",
                check: false,
            },
            {
                answerTwo: "Создание плавных анимаций",
                check: false,
            },
            {
                answerThree: "Для добавления разных форматов изображений, не поддерживаемых всеми браузерами",
                check: false,
            },
            {
                answerFour: "Cоздание пользовательских интерфейсов веб-приложений, интерактивных анимированных интерфейсов, ",
                check: true,
            },
        ]

    },

];