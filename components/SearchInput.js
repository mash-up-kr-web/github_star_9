import { setAttr } from "../utils.js";

export default function SearchInput({ getRepo }) {
  this.$inputComponent = document.createElement("div");
  const $input = document.createElement("input");
  setAttr($input, "type", "text");
  setAttr($input, "id", "searchInput");
  const $button = document.createElement("button");
  $button.innerText = "Search";
  $button.addEventListener("click", () => {
  const user = document.getElementById("searchInput").value;
    getRepo(user);
  });

  $input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const user = document.getElementById("searchInput").value;
      getRepo(user);
    }
});

  this.$inputComponent.appendChild($input);
  this.$inputComponent.appendChild($button);
}
