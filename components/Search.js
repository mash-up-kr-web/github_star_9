import SearchHeader from "./SearchHeader.js";
import SearchInput from "./SearchInput.js";
import { validateConstructor, setAttr } from "../utils.js";

export default function Search({ getRepo }) {
  validateConstructor.call(this);
  this.$searchComponent = document.createElement("div");
  this.$searchComponent.classList.add("search-container");
  this.makeComponent({ getRepo });
}
Search.prototype.makeComponent = function({ getRepo }) {
  const headerContent = {
    title: "Gitstar Ranking",
    content:
      "Unofficial GITHUB star ranking for users, organizations and repositories"
  };
  this.$header = new SearchHeader(headerContent);
  this.$input = new SearchInput({ getRepo });
  this.$searchComponent.appendChild(this.$header.$headerComponent);
  this.$searchComponent.appendChild(this.$input.$inputComponent);
};
