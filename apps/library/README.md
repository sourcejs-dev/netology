# Библиотека

```
git clone https://github.com/sourcejs-dev/netology.git
cd apps/library
npm i
npm run start
```
Сервер доступен по адресу: http://localhost:8080/<br>
Не забудьте указать URL для MONGODB в .env

## Примеры

### Добавить книгу
- POST /api/books
- Body (form-data):
  - image (file)
  - title (String)
  - description (String)
  - authors (String)
  - favorite (Boolean)
![image](https://user-images.githubusercontent.com/82123435/190342771-e40fa3d3-8b00-4628-85a1-02945698e2ce.png)

### Получить книги
- GET /api/books

![image](https://user-images.githubusercontent.com/82123435/190343036-d2d44b95-75e0-4dde-a613-1087111cac8e.png)

### Получить информацию о книге по ID
- GET /api/books/:id

![image](https://user-images.githubusercontent.com/82123435/190343284-ab034ec9-a102-48fd-9a81-10e081dab588.png)

### Изменить информацию о книге по ID
- PUT /api/books/:id
- Headers: 
  - Content-Type: 'application/json'
- Body:
  - title (String)
  - description (String)
  - authors (String)
  - favorite (Boolean)
  
Необходимо отправить хотя бы 1 параметр для изменения объекта


![image](https://user-images.githubusercontent.com/82123435/190345068-8b5ff09a-523d-47cd-91ca-3dace023a351.png)

### Удалить книгу по ID
- DELETE /api/books/:id

![image](https://user-images.githubusercontent.com/82123435/190345625-380c3106-9394-434f-9c16-b1017da59875.png)

### Авторизация
- GET /api/user/login

![image](https://user-images.githubusercontent.com/82123435/190345891-b058f8a7-0606-4810-b8d4-556507a78cad.png)

- POST /api/user/login
- Body (form-data):
  - username (String)
  - password (String)
  
### Профиль
- GET /api/user/me

![image](https://user-images.githubusercontent.com/82123435/190346220-293946cf-0f53-4999-9360-9712fc2fd259.png)

### Регистрация
- GET /api/user/signup

![image](https://user-images.githubusercontent.com/82123435/190346339-418590dd-9161-4102-bb49-aeac1890e977.png)

- POST /api/user/signup
- Body (form-data):
  - username (String)
  - password (String)
