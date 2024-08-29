export const tests = [
    {
        id: 1,
        question: "Что такое HTML и для чего он нужен?",
        answers: [
            {   id:1.1,
                text: "Это язык гипертекстовой разметки (HyperText Markup Language). Это стандартизированный язык, позволяющий создавать веб-страницы.",
                isRight: true,
            },
            {   id: 1.2,
                text: "Язык программирования, который позволяет создавать динамически обновляемый контент.",
                isRight: false,
            },
            {   id:1.3,
                text: "Строго типизированный объектно-ориентированный язык программирования общего назначения.",
                isRight: false,
            },
            {   id:1.4,
                text: "Строго типизированный объектно-ориентированный язык программирования общего назначения.",
                isRight: false,
            },
        ]

    },
    {
        id: 2,
        question: "Какие глобальные атрибуты есть в HTML?",
        answers: [
            {   id:2.1,
                text: "class, title, style, aria-*, onclick",
                isRight: true,
            },
            {   id:2.2,
                text: "label, max, min, multiple",
                isRight: false,
            },
            {   id:2.3, 
                text: "name, pattern, placeholder, required",
                isRight: false,
            },
            {   id:2.4,
                text: "selected, size, src, summary, type",
                isRight: false,
            },
        ]

    },
    {
        id: 3,
        question: "В каких случаях лучше использовать SVG?",
        answers: [
            {   id: 3.1,
                text: "Редактирование изображений, создания растровой и игровой графики, визуализации данных, создания фракталов и графиков функций.",
                isRight: false,
            },
            {   id: 3.2,
                text: "Для добавления разных форматов изображений, не поддерживаемых всеми браузерами ",
                isRight: false,
            },
            {   id: 3.3,
                text: "Cоздание пользовательских интерфейсов веб-приложений, интерактивных анимированных интерфейсов. ",
                isRight: true,
            },
            {   id: 3.4,
                text: "Создание плавных анимаций,интерактивных анимированных интерфейсов.",
                isRight: false,
            }
            
        ]

    },
    {
        id: 4,
        question: "Основные категории контента:",
        answers: [
            {   id:4.1,
                text: "Встроенный контент, Метаданные, Потоковый контент, Секционный контент.",
                isRight: false,
            },
            {   id: 4.2,
                text: "Встроенный контент, Интерактивный контент, Явный контент, Контент форм.",
                isRight: false,
            },
            {   id:4.3,
                text: 'Метаданные, Потоковый контент, Секционный контент, Заголовочный контент, Фразовый контент, Встроенный контент, Интерактивный контент, Явный контент, Контент форм',
                isRight: true,
            },
            {   id: 4.4,
                text: 'Метаданные, Потоковый контент, Секционный контент, Заголовочный контент, Фразовый контент,',
                isRight: false,
            },
        ]

    },
    {
        id: 5,
        question: "Для чего служит doctype?",
        answers: [
            {   id: 5.1,
                text: "Для обозначения основного тела документа",
                isRight: false,
            },
            {   id: 5.2,
                text: "Для указания типа документа браузеру",
                isRight: true,
            },
            {   id: 5.3,
                text: "Для связи html и css-документов",
                isRight: false,
            },
            {   id:5.4,
                text: "Для подключения шрифтов в документе",
                isRight: false,
            },
        ]

    },
   {
        id: 6,
        question: "Какие три тега являются обязательными для создания минимально допустимой HTML-страницы?",
        answers: [
            {   id: 6.1,
                text: "section ,h1, article",
                isRight: false,
            },
            {   id: 6.2,
                text: "header, main, footer",
                isRight: false,
            },
            {   id: 6.3,
                text: "nav, a, head",
                isRight: false,
            },
            {   id: 6.4,
                text: "html, head, body",
                isRight: true,
            },
        ]

    },
 /*{
    {
        id: 7,
        question: "Что такое валидация?",
        answers: [
            {
                text: "Проверка документа специальной программой валидатором на соответствие установленным веб-стандартам и обнаружение ошибок.",
                isRight: true,
            },
            {
                text: "Программный интерфейс, то есть описание способов взаимодействия одной компьютерной программы с другими.",
                isRight: false,
            },
            {
                text: "Расширение протокола HTTP для поддержки шифрования в целях повышения безопасности.",
                isRight: false,
            },
            {
                text: "Признак, приписываемое качество, свойство",
                isRight: false,
            },
        ]

    },
    {
        id: 8,
        question: "Сколько и какие типы проверок HTML документа существуют?",
        answers: [
            {
                text: "1 тип проверки: валидация HTML документа",
                isRight: false,
            },
            {
                text: "2 типа проверок: валидация HTML и CSS документа",
                isRight: false,
            },
            {
                text: "4 типа проверки: проверка синтаксиса, проверка вложенности, проверка dtd, проверка на наличие посторонних элементов.",
                isRight: true,
            },
            {
                text: "3 типа проверки: проверка синтаксиса, проверка вложенности, валидация HTML документа",
                isRight: false,
            },
        ]

    },
    {
        id: 9,
        question: "Основные этапы проверок валидности HTML-документа?",
        answers: [
            {
                text: "Валидация HTML, валидация CSS, валидация ссылок, валидация адаптивности, проверка синтаксиса кода",
                isRight: true,
            },
            {
                text: "Валидация HTML, валидация картинок, валидация JavaScript кода, проверка React кода",
                isRight: false,
            },
            {
                text: "Валидация HTML, валидация CSS, проверка расширением Prittier",
                isRight: false,
            },
            {
                text: "Валидация HTML, валидация CSS",
                isRight: false,
            },
        ]

    },
    {
        id: 10,
        question: "Какие из описанных ниже блоков отностятся к HTML5 ?",
        answers: [
            {
                text: "2D/3D-графика и эффекты, стилизация, семантика.",
                isRight: false,
            },
            {
                text: "Офлайн и хранилище, мультимедиа.",
                isRight: false,
            },
            {
                text: " Производительность, интеграция, доступ к устройствам.",
                isRight: false,
            },
            {
                text: "Все варианты правильные",
                isRight: true,
            },
        ]

    },
    {
        id: 11,
        question: "Какой тэг использовать для того, чтобы сверстать кнопку?",
        answers: [
            {
                text: " <strong>",
                isRight: false,
            },
            {
                text: "<button>, <input>, <a>",
                isRight: true,
            },
            {
                text: "<h1>, <nav>",
                isRight: false,
            },
            {
                text: "<ul>, <li>",
                isRight: false,
            },
        ]

    },
    {
        id: 12,
        question: "Что такое инлайновый стиль?",
        answers: [
            {
                text: "Стиль прописанный в отдельном файле CSS",
                isRight: false,
            },
            {
                text: "Стиль прописанный в файле HTML над тегом <html>",
                isRight: false,
            },
            {
                text: "Cтиль прописаннный не в отдельном файле/блоке, а непосредственно в коде.",
                isRight: true,
            },
            {
                text: "Стиль прописанный при помощи препроцессора SASS",
                isRight: false,
            },
        ]

    },
    {
        id: 13,
        question: "Можно ли переопределить инлайновый стиль?",
        answers: [
            {
                text: "Переопределить его можно только при помощи атрибута !important ",
                isRight: true,
            },
            {
                text: "Переопределить нельзя",
                isRight: false,
            },
            {
                text: "Можно переопределить если прописать его над тегом <html>",
                isRight: false,
            },
            {
                text: "Можно переопределить используя атрибут style внутри тега",
                isRight: false,
            },
        ]

    },
    {
        id: 14,
        question: "Есть ли у HTML элементов свои дефолтные специфичные стили?",
        answers: [
            {
                text: "Да, практически каждый html-элемент обладает набором индивидуальных стилей.",
                isRight: true,
            },
            {
                text: "Нет, индивидуальные стили отсутствуют",
                isRight: false,
            },
            {
                text: "Да, но их немного",
                isRight: false,
            },
            {
                text: "Да, информация стиля для одного элемента указывается в его атрибуте style",
                isRight: false,
            },
        ]

    },
    {
        id: 15,
        question: "Что такое семантика?",
        answers: [
            {
                text: "Это отличительная принадлежность, присвоенный кому-либо или чему-либо, знак, предмет для отличия.",
                isRight: false,
            },
            {
                text: "Использование правильных тегов, описывающих содержание контента внутри себя.",
                isRight: true,
            },
            {
                text: "Это применение определенного стиля элементов веб-страницы.",
                isRight: false,
            },
            {
                text: "Язык похожий на HAML, но предназначенный для упрощения создания CSS-кода",
                isRight: false,
            },
        ]

    },
    {
        id: 16,
        question: "Выберите два не семантических тега:",
        answers: [
            {
                text: "aside, nav",
                isRight: false,
            },
            {
                text: "header, footer",
                isRight: false,
            },
            {
                text: "span, div",
                isRight: true,
            },
            {
                text: "article, section",
                isRight: false,
            },
        ]

    },
    {
        id: 17,
        question: "Что не относится к типам списков HTML?",
        answers: [
            {
                text: "Маркированные списки (<ul>)",
                isRight: false,
            },
            {
                text: "Нумерованные списки (<ol>)",
                isRight: false,
            },
            {
                text: "Cписки определений (<dl>)",
                isRight: false,
            },
            {
                text: "Список пунктов",
                isRight: true,
            },
        ]

    },
    {
        id: 18,
        question: "Для какого тэга используется атрибут alt и зачем он нужен?",
        answers: [
            {
                text: "Используется для тега img.  Если картинка не отображается, то будет отображаться альтернативный текст.",
                isRight: true,
            },
            {
                text: "Используется для тега заголовков h1-h6, для лучшей читаемости заголовков",
                isRight: false,
            },
            {
                text: "Используется для тега style для добавления css стилей в html",
                isRight: false,
            },
            {
                text: "Используется для семантических тегов, для облегчения работы поисковых систем при индексации контента",
                isRight: false,
            },
        ]

    },
    {
        id: 19,
        question: "Какие теги делают текст жирным?",
        answers: [
            {
                text: "<li>, <ul>",
                isRight: false,
            },
            {
                text: "<strong>, <b> ",
                isRight: true,
            },
            {
                text: "<em>, <i>",
                isRight: false,
            },
            {
                text: "<br>, <h1>",
                isRight: false,
            },
        ]

    },
    {
        id: 20,
        question: "Какие теги делают текст курсивным?",
        answers: [
            {
                text: "<em>, <i>",
                isRight: true,
            },
            {
                text: "<h3>, <h4>",
                isRight: false,
            },
            {
                text: "<article>, <section>",
                isRight: false,
            },
            {
                text: "<div>, <span>",
                isRight: false,
            },
        ]

    },
    {
        id: 21,
        question: "Что из предложенного ниже не является видом <input> элементов в HTML?",
        answers: [
            {
                text: "text, number,",
                isRight: false,
            },
            {
                text: "email, checkbox",
                isRight: false,
            },
            {
                text: "submit, date",
                isRight: false,
            },
            {
                text: "style, strong",
                isRight: true,
            },
        ]

    },
    {
        id: 22,
        question: "Для чего используют data-атрибуты?",
        answers: [
            {
                text: "Для отправки данных на сервер",
                isRight: false,
            },
            {
                text: "Для лучшей читаемости семантических тегов",
                isRight: false,
            },
            {
                text: "Для хранения различной информации.",
                isRight: true,
            },
            {
                text: "В настоящее время они не используются.",
                isRight: false,
            },
        ]

    },
    {
        id: 23,
        question: "Для чего используется элемент <datalist>?",
        answers: [
            {
                text: "Для создания выпадающего списка с возможностью в html нативной реализации автозаполнения.",
                isRight: true,
            },
            {
                text: "Для получения данных от пользователя",
                isRight: false,
            },
            {
                text: "Для указания поисковым системам содержания страницы",
                isRight: false,
            },
            {
                text: "Для группировки содержимого страницы, которое связано тематически или по смыслу.",
                isRight: false,
            },
        ]

    },
    {
        id: 24,
        question: "Почему для подключения CSS стилей тег <link> раполагают внутри тэга <head>?",
        answers: [
            {
                text: "Чтобы как можно раньше показать пользователю хоть какой-то контент, а не белую страницу.",
                isRight: true,
            },
            {
                text: "Чтобы не влиять на процессы построения DOM и стилизации элементов",
                isRight: false,
            },
            {
                text: "Для встраивания или подключения исполняемого JavaScript кода",
                isRight: false,
            },
            {
                text: "для размещения всего содержимого, которое отображается на веб-странице",
                isRight: false,
            },
        ]

    },
    {
        id: 25,
        question: " Почему <script> для подключения JS нужно ставить перед закрывающимся тэгом </body>?",
        answers: [
            {
                text: "Для размещения всего содержимого, которое отображается на веб-странице.",
                isRight: false,
            },
            {
                text: "Чтобы как можно раньше показать пользователю хоть какой-то контент, а не белую страницу.",
                isRight: false,
            },
            {
                text: "Для того чтобы не влиять на описанные процессы построения DOM и стилизации элементов",
                isRight: true,
            },
            {
                text: "Для создания интерактивных элементов управления в веб-формах для получения данных от пользователя",
                isRight: false,
            },
        ]

    },
    {
        id: 26,
        question: "Что такое мета-тэги?",
        answers: [
            {
                text: "Часть программного HTML-кода, заключенная между тегом <head>...</head> (заголовок страницы).",
                isRight: true,
            },
            {
                text: "Шаблон, соответствующий определенным элементам HTML-разметки",
                isRight: false,
            },
            {
                text: "Это видимая пользователю область веб-страницы",
                isRight: false,
            },
            {
                text: "HTML элемент, использующийся для рисования графики средствами языков программирования",
                isRight: false,
            },
        ]

    },
    {
        id: 27,
        question: "Что описывается в тэге <head>?",
        answers: [
            {
                text: "Предназначен для хранения служебной информации о странице.",
                isRight: true,
            },
            {
                text: "Cодержит весь контент, который появится на странице.",
                isRight: false,
            },
            {
                text: "Содержимое страницы, которое связано тематически или по смыслу.",
                isRight: false,
            },
            {
                text: "Описывается значение атрибутов",
                isRight: false,
            },
        ]

    },
    {
        id: 28,
        question: "Что описывается в тэге <head>?",
        answers: [
            {
                text: "Для того чтобы разбить текстовый контент по секциям",
                isRight: false,
            },
            {
                text: "Для создания таблицы",
                isRight: true,
            },
            {
                text: "Для хранения различной технической информации",
                isRight: false,
            },
            {
                text: "Для отправки данных пользователя на сервер",
                isRight: false,
            },
        ]

    },
    {
        id: 29,
        question: "Какого тега не существует для создания таблицы?",
        answers: [
            {
                text: "th",
                isRight: false,
            },
            {
                text: "tr",
                isRight: false,
            },
            {
                text: "tk",
                isRight: true,
            },
            {
                text: "td",
                isRight: false,
            },
        ]

    },
    {
        id: 30,
        question: "Зачем нужен мета-тег viewport?",
        answers: [
            {
                text: "Чтобы сообщить браузеру, как масштабировать и отображать страницу на разных устройствах.",
                isRight: true,
            },
            {
                text: "Для группировки непронумерованных элементов данных.",
                isRight: false,
            },
            {
                text: "Для создания блоков макета CSS и расположения их в документе.",
                isRight: false,
            },
            {
                text: "Для группировки элементов в целях стилизации.",
                isRight: false,
            },
        ]

    },
    {
        id: 31,
        question: "Что такое <canvas>?",
        answers: [
            {
                text: "Язык разметки масштабируемые векторные графики.",
                isRight: false,
            },
            {
                text: "Атрибут, содержащий информацию CSS.",
                isRight: false,
            },
            {
                text: "HTML-элемент, который содержит машиночитаемую информацию (metadata) о документе, например его заголовок, скрипты и страницы стилей",
                isRight: false,
            },
            {
                text: "HTML элемент использующийся для рисования графики средствами языков программирования.",
                isRight: true,
            },
        ]

    },
    {
        id: 32,
        question: "Для чего используется элемент <canvas>?",
        answers: [
            {
                text: "Для создания таблицы.",
                isRight: false,
            },
            {
                text: "Для группировки содержимого страницы",
                isRight: false,
            },
            {
                text: "Для вставки изображений, градиентов и сложной анимации, отрисовки графики",
                isRight: true,
            },
            {
                text: "Для задания цветов, шрифтов, стилей, расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц",
                isRight: false,
            },
        ]

    },
    {
        id: 33,
        question: "Что такое <svg>?",
        answers: [
            {
                text: "HTML элемент использующийся для рисования графики средствами языков программирования.",
                isRight: false,
            },
            {
                text: "Язык разметки масштабируемые векторные графики.",
                isRight: true,
            },
            {
                text: "Атрибут, содержащий информацию CSS",
                isRight: false,
            },
            {
                text: "HTML-элемент, который содержит машиночитаемую информацию (metadata) о документе, например его заголовок, скрипты и страницы стилей",
                isRight: false,
            },
        ]

    },
    {
        id: 34,
        question: "Разница между <canvas> и <svg>?",
        answers: [
            {
                text: "Canvas - это одиночный дом элемент, скриптовый язык. SVG - это набор элементов, язык разметки. ",
                isRight: true,
            },
            {
                text: "SVG - это одиночный дом элемент, скриптовый язык. Canvas - это набор элементов, язык разметки.",
                isRight: false,
            },
            {
                text: "SVG используется для растровой графики,а  canvas для векторной;",
                isRight: false,
            },
            {
                text: "Сanvas изображения поддаются сжатию, в то время как SVG с изображением нельзя сжимать.",
                isRight: false,
            },
        ]

    },
    {
        id: 35,
        question: "В каких случаях лучше использовать <canvas>?",
        answers: [
            {
                text: "Cоздание пользовательских интерфейсов веб-приложений, интерактивных анимированных пользовательских интерфейсов, графиков и диаграмм.",
                isRight: false,
            },
            {
                text: "Редактирование изображений, создания растровой и игровой графики, визуализации данных, создания фракталов и графиков функций.",
                isRight: true,
            },
            {
                text: "Для добавления разных форматов изображений, не поддерживаемых всеми браузерами.",
                isRight: false,
            },
            {
                text: "Создание плавных анимаций",
                isRight: false,
            },
        ]

    },
   */

];
