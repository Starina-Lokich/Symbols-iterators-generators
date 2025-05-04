import Character from './Character';

export default class Team {
    constructor() {
      this.members = [];
    }
  
    add(character) {
      if (!(character instanceof Character)) {
        throw new Error('Можно добавлять только объекты типа Character');
      }
      this.members.push(character);
    }
  
    [Symbol.iterator]() {
      let index = 0;
      const members = this.members;
  
      return {
        next() {
          if (index < members.length) {
            return { value: members[index++], done: false };
          }
          return { done: true };
        },
      };
    }
  }