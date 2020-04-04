import { observable } from 'mobx';

class Store {
  @observable data = [];
}

export default new Store();
