- для сощдания ключей и id уникальных https://www.npmjs.com/package/uuid
- для форм валидации https://www.react-hook-form.com/
- для дизайна https://ant.design/
- маршрутизация react-router(outlet) https://reactrouter.com/en/main
  -stateManager redux toolkit
- auth(firebase)
  -db - realtime dataBase (firebase)
  -hosting - firebase

Инициализация
-При инициализации приложения, в компоненте RootLoyaout в useEffect должно вызываться функция которая проверяет есть ли зарегистрированный
пользователь или нет(функция берется в сервисе FB)
==> если функция отдает авторизованного пользователя, вы с этого обьекта забераете его email , достаете из редакса всех существющих пользователей в базе(они уже лежат в редаксе так как сработал мидлваер) и по email достаете своего пользователя и в редаксе в слайс authUser записываете всю инфу что вы достали из базы по этому пользователю.

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/auth.user
const uid = user.uid;
// ...
} else {
// User is signed out
// ...
}
});

Авторизация
Валидация
Метод fb по входу в систему

Регистрация
Вызываем метод регистрацции и при успешном выполнении вызываем сервис fbUsers и добавляем пользшователя в базу данных со всей обьемной информацией

Забыли пароль
Получаем email от пользователя => достаем из редакса всех users проверяем есть ли такой пользователь в редаксе, если нет говарим что нету вас идите
регистрируйтесь, если есть вызываем метод по смене пароля через почту (см FB)
