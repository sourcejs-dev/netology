# База данных и хранение данных

```
git clone https://github.com/sourcejs-dev/netology.git
cd 2.6 База данных и хранение данных
```

- ### запрос(ы) для вставки данных минимум о двух книгах в коллекцию books
```javascript
db.books.insertMany([
  {
    title: "Гарри Поттер и философский камень",
    description:
      "В Хогвартской школе чародейства и волшебства Гарри попадает в водоворот невероятных приключений. Он изучает квиддич – спорт высшего пилотажа, играет в захватывающую игру живыми шахматными фигурами, встречается с Темным Волшебником, который хочет его уничтожить.",
    authors: "Джоан Роулинг",
  },
  {
    title: "Гарри Поттер и Тайная комната",
    description:
      "Книга рассказывает о втором учебном годе в школе чародейства и волшебства Хогвартс, на котором Гарри и его друзья — Рон Уизли и Гермиона Грейнджер — расследуют таинственные нападения на учеников школы, совершаемые неким «Наследником Слизерина». Объектами нападений являются маглорожденные ученики.",
    authors: "Джоан Роулинг",
  },
]);
```
- ### запрос для поиска полей документов коллекции books по полю title
```javascript
db.books.find({ title: "Гарри Поттер и философский камень" })
```

- ### запрос для редактирования полей: description и authors коллекции books по _id записи
```javascript
db.books.updateOne({ _id: "..." }, { $set: { description: "Новое описание", authors: "Новый Автор" } })
```