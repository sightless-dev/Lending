import fs from 'fs';
import path from 'path';

// 1. Исправляем шапку (делаем её fixed w-full)
const headerPath = path.resolve('src/components/Header.tsx');
if (fs.existsSync(headerPath)) {
  let content = fs.readFileSync(headerPath, 'utf8');
  
  content = content.replace(
    /className=\{cn\("sticky top-0 z-30 transition",/g,
    'className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300",'
  );
  
  fs.writeFileSync(headerPath, content, 'utf8');
  console.log('✅ Шапка (Header.tsx) теперь надежно зафиксирована!');
} else {
  console.log('⚠️ Файл Header.tsx не найден.');
}

// 2. Исправляем главный контейнер (меняем hidden на современный clip)
const appPath = path.resolve('src/App.tsx');
if (fs.existsSync(appPath)) {
  let content = fs.readFileSync(appPath, 'utf8');
  
  content = content.replace(
    /className="relative min-h-screen overflow-hidden/g,
    'className="relative min-h-screen overflow-clip'
  );
  
  fs.writeFileSync(appPath, content, 'utf8');
  console.log('✅ Исправлен баг скролла в App.tsx!');
} else {
  console.log('⚠️ Файл App.tsx не найден.');
}

console.log('\\n🎉 Готово! Проверяй скролл.');