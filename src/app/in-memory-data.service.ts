import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Ironman' },
      { id: 12, name: 'Captain America' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Thor' },
      { id: 15, name: 'Black widow' },
      { id: 16, name: 'Antman' },
      { id: 17, name: 'Spiderman' },
      { id: 18, name: 'Black panther' },
      { id: 19, name: 'Hawk eye' },
      { id: 20, name: 'Vision' }
    ];
    return {heroes};
  }
}
