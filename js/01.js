const user = {};

// Додаємо поле mood зі значенням 'happy'
user.mood = 'happy';

// Замінюємо значення hobby на 'skydiving'
user.hobby = 'skydiving';

// Замінюємо значення premium на false
user.premium = false;

// Виводимо вміст об'єкта user
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
