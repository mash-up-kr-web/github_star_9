export default function ListBody() {
  this.$listComponent = document.createElement("div");
  this.$listComponent.classList.add("list-body");
}

ListBody.prototype.render = function(data) {
  data.map(data => {
    const $listLow = document.createElement("div");
    const $title = document.createElement("span");
    const $statCnt = document.createElement("span");
    $listLow.classList.add("list-rows");
    $title.classList.add("list-title");
    $statCnt.classList.add("list-star");
    $title.innerText = data.name;
    $statCnt.innerText = data.stargazers_count;

    $listLow.addEventListener("click", () => (location.href = data.html_url));
    $listLow.appendChild($title);
    $listLow.appendChild($statCnt);
    this.$listComponent.appendChild($listLow);
  });
};
