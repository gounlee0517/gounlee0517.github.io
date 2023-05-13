const content = "사랑은 결코 시들지 않는다.";
const text = document.querySelector(".love-never-p");
let i = 0;

function typing(){
  let txt = content[i++];
  text.innerHTML += txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 200)