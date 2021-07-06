# CLI-application

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
[a-link]:(https://drive.google.com/file/d/1mFVVF3YAQAKJ6jTvf6X54O24GIprxjbF/view?usp=sharing)

# Получаем контакт по id

node index.js --action get --id 5
[a-link]:(https://drive.google.com/file/d/1E4jP9XlINbdLWFWqdu5H_-W-ccbGJv58/view?usp=sharing)

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
[a-link]:(https://drive.google.com/file/d/17xWgmSiTF3Iv_e_fW1jT25g8adQYkRJK/view?usp=sharing)

# Удаляем контакт

node index.js --action remove --id=3
[a-link]:(https://drive.google.com/file/d/1KPjlhQWzVlzSQtbTnMb5KdxuABQ1zoaa/view?usp=sharing)
