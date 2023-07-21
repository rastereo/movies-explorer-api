# movies-explorer-api

Дипломная работа Movies Explorer REST API. Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

## Технологии:

+ [NodeJS](https://nodejs.org)
+ [Express](https://expressjs.com)
+ [MongoDB](https://www.mongodb.com/)
+ [Mongoose](https://mongoosejs.com/)
+ [ESLint](https://eslint.org/)
+ [Celebrate](https://github.com/arb/celebrate)
+ [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
+ [Cookie-parser](https://github.com/expressjs/cookie-parser)
+ [Cors](https://github.com/expressjs/cors)
+ [Dotenv](https://github.com/motdotla/dotenv)
+ [Helmet](https://github.com/helmetjs/helmet)
+ [Node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
+ [Validator.js](https://github.com/validatorjs/validator.js)
+ [Winston](https://github.com/winstonjs/winston)
+ [Nodemon](https://github.com/remy/nodemon)

## Функциональность проекта:

+ Регистрация
+ Авторизация
+ Обновление данных пользователя
+ Получение информации о текущем пользователе
+ Получение списка фильмов пользователя 
+ Создание фильма
+ Удаление фильма
+ Центральная обработка ошибок
+ Валидация входящих данных
+ Обработка и отправка куки
+ Хранение паролей в зашифрованном виде
+ Логирование ошибок и запросов на сервер в формате JSON
+ Поддержка работы с доступом по https
+ Конфигурация и константы приложения в отдельных файлах
+ Ограничение числа запросов с одного IP

## Директории:

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки фильмов   
`/models` — папка с файлами описания схем пользователя и карточки
  
Остальные директории вспомогательные.

## Роуты:

`POST /signup` — создаёт пользователя с переданными в теле email, password и name
`POST /signin` — проверяет переданные в теле почту и пароль и возвращает куки JWT
`GET /signout` — удаляет JWT из куки

`GET /users/me` — возвращает информацию о пользователе (email и имя)
`PATCH /users/me` — обновляет информацию о пользователе

`GET /movies` — возвращает все сохранённые текущим  пользователем фильмы
`POST /movies` — создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId, owner
`DELETE /movies/_id` — удаляет сохранённый фильм по id

## Инструкция по запуску проекта:

1. Склонируйте репозиторий на свой компьютер:
```bash
git clone git@github.com:rastereo/movies-explorer-api.git
```
2. Установите зависимости
```bash
npm install
```
3. Запустите mongodDB
```bash
npm mongod
```
4. Запускает сервер
```bash
npm run start
```
Запускает сервер с hot-reload.
```bash
npm run dev
```

## Ссылки

+ Публичный IPv4: 158.160.114.107
+ Домен сервера: https://api.rastereo.diplom.nomoredomains.xyz
+ Cайт: https://rastereo.diplom.nomoredomains.xyz
+ Github репозиторий: https://github.com/rastereo/movies-explorer-api
+ Критерии диплома веб-разработчика: https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html