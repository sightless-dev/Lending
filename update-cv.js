import fs from 'fs';
import path from 'path';

// 1. Создаем папку public, если её вдруг нет
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 2. Ищем твой логотип и копируем в public (переименовывая в правильный logo.png)
const possiblePaths = ['src/assets/Logo.png', 'src/assets/logo.png'];
let logoFound = false;

for (const p of possiblePaths) {
  if (fs.existsSync(path.resolve(p))) {
    fs.copyFileSync(path.resolve(p), path.resolve('public/logo.png'));
    logoFound = true;
    console.log('✅ Логотип скопирован в папку public (теперь он правильно называется logo.png)!');
    break;
  }
}

if (!logoFound) {
  console.log('⚠️ Логотип не найден! Убедись, что файл Logo.png лежит в src/assets/');
}

// 3. Обновляем пути в коде
const updatePath = (filePath) => {
  const fullPath = path.resolve(filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    // Заменяем старые пути на прямой путь к папке public
    content = content.replace(/\/src\/assets\/[L|l]ogo\.png/g, '/logo.png');
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('✅ Обновлены пути в:', filePath);
  }
};

updatePath('src/components/Header.tsx');
updatePath('src/components/Footer.tsx');

// 4. Обновляем иконку вкладки (favicon) в index.html
const indexPath = path.resolve('index.html');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  content = content.replace(/\/src\/assets\/[L|l]ogo\.png/g, '/logo.png');
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('✅ Обновлен favicon в index.html');
}

console.log('\\n🎉 Готово! Сохраняй изменения и отправляй на GitHub.');