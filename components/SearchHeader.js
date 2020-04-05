export default function SearchHeader({ title, content }) {
  this.$headerComponent = document.createElement("div");
  const $title = document.createElement("h1");
  $title.innerText = title;
  const $paragraph = document.createElement("p");
  $paragraph.innerText = content;

  this.$headerComponent.appendChild($title);
  this.$headerComponent.appendChild($paragraph);
}
