import fs from 'fs';
import path from 'path';

const fixLogo = (filePath, isHtml = false) => {
  const fullPath = path.resolve(filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    if (isHtml) {
      // Меняем пути и тип файла в index.html
      content = content.replace(/href="\/logo\.svg"/g, 'href="/logo.png"');
      content = content.replace(/type="image\/svg\+xml"/g, 'type="image/png"');
    } else {
      // Меняем пути в компонентах React
      content = content.replace(/src="\/logo\.svg"/g, 'src="/logo.png"');
    }
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('✅ Обновлены пути в:', filePath);
  } else {
    console.log('⚠️ Файл не найден:', filePath);
  }
};

fixLogo('index.html', true);
fixLogo('src/components/Header.tsx');
fixLogo('src/components/Footer.tsx');

console.log('\\n🎉 Готово! Теперь везде используется твой PNG логотип.');