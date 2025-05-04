import Character from '../symbols_iterators/Character.js';
import Team from '../symbols_iterators/Team.js';

// Создание персонажей
const archer = new Character({
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});

const warrior = new Character({
  name: 'Воин',
  type: 'Swordsman',
  health: 80,
  level: 2,
  attack: 50,
  defence: 30,
});

// Создание команды
const team = new Team();
team.add(archer);
team.add(warrior);

// Итерация по команде
for (const member of team) {
  console.log(member.toString());
}