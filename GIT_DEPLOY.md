# Инструкция по выгрузке проекта на Git

## 🚀 Подготовка к выгрузке

Проект готов для выгрузки на Git. Все файлы очищены и подготовлены.

### Шаги для выгрузки:

1. **Создайте репозиторий на GitHub/GitLab**
   ```bash
   # На GitHub/GitLab создайте новый репозиторий с названием: night-run-korolev
   ```

2. **Инициализируйте Git (если нужно)**
   ```bash
   git init
   git branch -M main
   ```

3. **Добавьте все файлы**
   ```bash
   git add .
   ```

4. **Создайте первый коммит**
   ```bash
   git commit -m "feat: initial commit - Night Run Korolev event registration system"
   ```

5. **Подключите удаленный репозиторий**
   ```bash
   git remote add origin https://github.com/ваш-username/night-run-korolev.git
   ```

6. **Загрузите проект**
   ```bash
   git push -u origin main
   ```

## 📁 Что включено в проект:

- ✅ **Frontend**: React + TypeScript + Tailwind CSS
- ✅ **Backend**: Node.js + Express + PostgreSQL
- ✅ **Админ панель**: Полное управление участниками и контентом
- ✅ **База данных**: Drizzle ORM с миграциями
- ✅ **Аутентификация**: Сессии для админ панели
- ✅ **Файлы**: Загрузка фото и документов
- ✅ **Документация**: README.md с полным описанием

## 🔧 Переменные окружения для деплоя:

Создайте файл `.env` в корне проекта:

```env
DATABASE_URL=postgresql://username:password@host:port/database
SESSION_SECRET=your-super-secret-session-key
NODE_ENV=production
PORT=5000
```

## 🌐 Деплой на популярные платформы:

### Vercel
```bash
npm i -g vercel
vercel
```

### Railway
```bash
npm i -g @railway/cli
railway login
railway init
railway up
```

### Heroku
```bash
heroku create night-run-korolev
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

## 🔐 Данные для входа в админ панель:

- **URL**: `/login`
- **Логин**: `admin`
- **Пароль**: `nightrun2025`

## 📝 Следующие шаги после деплоя:

1. Настройте базу данных PostgreSQL
2. Установите переменные окружения
3. Запустите миграции: `npm run db:push`
4. Откройте сайт и проверьте работу
5. Войдите в админ панель и протестируйте функции

## 🎯 Основные URL проекта:

- `/` - Главная страница с регистрацией
- `/login` - Вход в админ панель
- `/admin` - Панель администратора

Проект полностью готов к деплою!