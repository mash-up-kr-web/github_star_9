import ListHeader from "./ListHeader.js";
import ListBody from "./ListBody.js";
import { validateConstructor } from "../utils.js";

export default function List() {
  validateConstructor.call(this);
  this.$searchResultComponent = document.createElement("div");
  this.$searchResultComponent.classList.add("list-container");
  this.makeComponent();
}

List.prototype.makeComponent = function() {
  this.$header = new ListHeader();
  this.$body = new ListBody();
  this.$searchResultComponent.appendChild(this.$header.$headerComponent);
  this.$searchResultComponent.appendChild(this.$body.$listComponent);
};
List.prototype.render = function(data) {
  this.$header.render(data);
  this.$body.render(data);
};
