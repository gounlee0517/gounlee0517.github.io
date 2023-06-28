const { translate } = require("mongodb/lib/core/topologies/read_preference");

const content = "I am . . .";
const text = document.querySelector(".iam-iam");
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

//60까지 스크롤 바를 내리면, 글씨를 위로 이동시켜주셈

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
})
