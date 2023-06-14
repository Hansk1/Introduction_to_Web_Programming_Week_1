import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready");
    initializeCode();
  });
}

function initializeCode() {
  const addTextBtn = document.getElementById("my-button");
  const h1 = document.getElementById("title-text");
  const addItemBtn = document.getElementById("add-data");
  const dataList = document.getElementById("dataList");

  addTextBtn.addEventListener("click", function () {
    console.log("hello world");
    h1.innerText = "My notebook";
  });

  addItemBtn.addEventListener("click", function () {
    let newListItem = document.createElement("li");

    newListItem.innerText = document.getElementById("data").value;

    dataList.appendChild(newListItem);
  });
}
