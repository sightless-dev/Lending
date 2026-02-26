import fs from 'fs';
import path from 'path';

const heroPath = path.resolve('src/sections/Hero.tsx');
if (fs.existsSync(heroPath)) {
  let heroContent = fs.readFileSync(heroPath, 'utf8');
  heroContent = heroContent.replace('Розглядаю позицію Junior Media Buyer', 'Розглядаю позицію Middle Media Buyer');
  heroContent = heroContent.replace('Рассматриваю позицию Junior Media Buyer', 'Рассматриваю позицию Middle Media Buyer');
  fs.writeFileSync(heroPath, heroContent, 'utf8');
  console.log('✅ Файл Hero.tsx успешно обновлен (Junior -> Middle)');
} else {
  console.log('⚠️ Файл Hero.tsx не найден.');
}

const expPath = path.resolve('src/sections/Experience.tsx');
if (fs.existsSync(expPath)) {
  let expContent = fs.readFileSync(expPath, 'utf8');
  expContent = expContent.replace('Junior Media Buyer • Gambling & Betting', 'Middle Media Buyer • Gambling & Betting');
  fs.writeFileSync(expPath, expContent, 'utf8');
  console.log('✅ Файл Experience.tsx успешно обновлен (Junior -> Middle)');
} else {
  console.log('⚠️ Файл Experience.tsx не найден.');
}

console.log('\n🎉 Готово! Теперь на сайте ты официально Middle Media Buyer.');