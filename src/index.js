import Team from './Team';
import Character from './Character';
import canIterate from './canIterate';

// Создаем команду
const team = new Team();

const archer = new Character('Лучник', 'Bowman');
const warrior = new Character('Воин', 'Warrior');

team.add(archer);
team.add(warrior);

console.log('Перебор команды:');
for (const member of team) {
  console.log(member);
}

console.log('\nПроверка canIterate:');
console.log('new Map():', canIterate(new Map()));
console.log('new Set():', canIterate(new Set()));
console.log('null:', canIterate(null));
console.log('10:', canIterate(10));
console.log('"Netology":', canIterate('Netology'));