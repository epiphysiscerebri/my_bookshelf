Вот обновлённое описание:

---

# my_bookshelf

**my_bookshelf** – это приложение для управления списком книг. Позволяет добавлять и редактировать книги, а также выполнять массовое удаление с помощью чекбоксов.

## Технологии

- **Сборщик**: [Vite](https://vitejs.dev/)
- **Библиотека UI**: [MUI](https://mui.com/)
- **Фронтенд**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Состояние**: [RTK (Redux Toolkit)](https://redux-toolkit.js.org/) + [Redux Thunk](https://redux-toolkit.js.org/api/createAsyncThunk)
- **Маршрутизация**: [React Router](https://reactrouter.com/)
- **Архитектура**: Feature-Sliced Design (FSD)
- **Стилизация**: БЭМ, модульные стили

## Функционал

- Добавление книг в список
- Редактирование информации о книгах
- Массовое удаление книг через чекбоксы
- Отображение пронумерованного динамического списка книг

## Структура проекта

```
src/
 ├── app/              # Инициализация приложения
 ├── entities/         # Сущности (базовые объекты, используемые в приложении)
 ├── pages/            # Страницы приложения
 ├── shared/           # Переиспользуемые компоненты, утилиты, стили
 ├── store/            # Redux Toolkit (RTK) + Redux Thunk
 ├── widgets/          # Виджеты (комбинации нескольких компонентов)
```

## Установка и запуск

### Требования

- **Node.js**: >= **22.0.0**
- **npm**: >= **10.0.0**

### Инструкция

1. **Клонировать репозиторий**

   ```sh
   git clone https://github.com/epiphysiscerebri/my_bookshelf.git
   cd my_bookshelf
   ```

2. **Установить зависимости**

   ```sh
   npm install
   ```

3. **Запустить локальный сервер**
   ```sh
   npm run dev
   ```
