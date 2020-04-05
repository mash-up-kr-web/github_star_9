export default function ListHeader() {
  this.$headerComponent = document.createElement("div");
  const $title = document.createElement("h1");
  $title.innerText = "Gitstar Ranking";
  const $paragraph = document.createElement("p");
  $paragraph.innerText = this.content;

  this.$headerComponent.appendChild($title);
}

ListHeader.prototype.render = function(data) {
  const repoCnt = data.length;
  const starCnt = data.reduce((acc, data) => (acc += data.stargazers_count), 0);
  const content = `${repoCnt} repositories | ${starCnt} stars`;

  const $paragraph = document.createElement("p");
  $paragraph.innerText = content;
  this.$headerComponent.appendChild($paragraph);
};
