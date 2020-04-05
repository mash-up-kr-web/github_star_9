import Search from "./components/Search.js";
import List from "./components/List.js";
import { validateConstructor, validateArray, isStateEqual } from "./utils.js";

function App(element) {
  validateConstructor.call(this);
  if (!element) throw new Error(`There is no element`);
  this.$appComponent = element;

  this.init();
}

App.prototype.init = function() {
  this.makeComponent();
};

App.prototype.makeComponent = function() {
  this.search = new Search({
    getRepo: this.getRepo.bind(this)
  });
  this.list = new List();
  this.$appComponent.appendChild(this.search.$searchComponent);
  this.$appComponent.appendChild(this.list.$searchResultComponent);
};

App.prototype.getRepo = async function(user) {
  const url = `https://api.github.com/users/${user}/repos`;
  const result = await fetch(url);
  const data = await result.json();
  this.setState(data);
};

App.prototype.setState = function(data) {
  validateArray(data);
  if (!isStateEqual(this.data, data)) {
    this.data = data;
    this.render(data);
  }
};

App.prototype.render = function(data) {
  this.list.render(data);
};

export default App;
