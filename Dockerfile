# Використовуємо Node.js як базовий образ
FROM node:16

# Створюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install --production

# Копіюємо всі файли у контейнер
COPY . .

# Вказуємо порт, на якому додаток слухає
EXPOSE 8080

# Команда для запуску додатку
CMD ["npm", "start"]