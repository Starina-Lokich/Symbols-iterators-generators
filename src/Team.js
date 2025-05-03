import Character from './Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!(character instanceof Character)) {
      throw new Error('Можно добавлять только экземпляры класса Character');
    }
    this.members.add(character);
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}