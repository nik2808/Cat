// import "./styles.css";

let cat = " cat.jpeg",
  couple =
    " a man and a woman trying to cook a meal together in a modern kitchen.jpg",
  beach = " bali-kelingking-beach-plastic-removal-drive.key",
  pitch = " NextByk Investor Pitch 2022.ppt",
  report = " interns-performance-report-may-2022.key";
let x = 50,
  y = 50,c=1;
var sourc =
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
let s = cat;

document.getElementById("app").innerHTML = `
<div class="container" id="container">
<div class="lines">
<ul class="no-bullets">
<li class="cat"><button id="btn1" class="click"><img src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" title:"cat.jpeg" style="height: 50px; min-width:50px; max-width:50px;"><div id="one"> ${cat}</div></button></li>
<li class="couple"><button id="btn2" class="click"><img src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" style="height: 50px; min-width:50px; max-width:50px;"><div id="two"> ${couple}</div></button></li>
<li class="beach"><button id="btn3" class="click"><img src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" title:"cat.jpeg" style="height: 50px; min-width:50px; max-width:50px;"><div id="three"> ${beach}</div></button></li>
<li class="pitch"><button id="btn4" class="click"><img src="https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" title:"cat.jpeg" style="height: 50px; min-width:50px; max-width:50px;"><div id="four"> ${pitch}</div></button></li>
<li class="report"><button id="btn5" class="click"><img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"" title:"cat.jpeg" style="height: 50px; min-width:50px; max-width:50px;"><div id="five"> ${report}</div></button></li>
</ul>
</div>
<div><ul>
<li><img id="imag" src=${sourc} height="600" width="400"></li>
<li><textarea class="inpt" type="text" id="Txt" value=${s}>${s}</textarea></li></ul>
</div>
</div>
`;

var input = document.getElementById("Txt");
const txt = document.getElementById("Txt");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var inp = document.getElementById("Txt").value;
    if(c===1){
      cat=inp;
      document.getElementById("one").innerHTML=`${inp}`;
    }
    if(c===2){
      couple=inp;
      document.getElementById("two").innerHTML=`${inp}`;
    }
    if(c===3){
      beach=inp;
      document.getElementById("three").innerHTML=`${inp}`;
    }
    if(c===4){
      pitch=inp;
      document.getElementById("four").innerHTML=`${inp}`;
    }
    if(c===5){
      report=inp;
      document.getElementById("five").innerHTML=`${inp}`;
    }
  }
});

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const img = document.getElementById("imag");

btn1.addEventListener("click", function onClick() {
  img.src =
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
  txt.value = cat;
  btn1.style.backgroundColor = "blue";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "white";
  btn4.style.backgroundColor = "white";
  btn5.style.backgroundColor = "white";
  c=1;
});

btn2.addEventListener("click", function onClick() {
  img.src =
    "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
  txt.value = couple;
  btn2.style.backgroundColor = "blue";
  btn3.style.backgroundColor = "white";
  btn4.style.backgroundColor = "white";
  btn5.style.backgroundColor = "white";
  btn1.style.backgroundColor = "white";
  c=2;
});

btn3.addEventListener("click", function onClick() {
  img.src =
    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
  txt.value = beach;
  btn3.style.backgroundColor = "blue";
  btn3.style.textColor = "white";
  btn2.style.backgroundColor = "white";
  btn4.style.backgroundColor = "white";
  btn5.style.backgroundColor = "white";
  btn1.style.backgroundColor = "white";
  c=3;
});

btn4.addEventListener("click", function onClick() {
  img.src =
    "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
  txt.value = pitch;
  btn4.style.backgroundColor = "blue";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "white";
  btn5.style.backgroundColor = "white";
  btn1.style.backgroundColor = "white";
  c=4;
});

btn5.addEventListener("click", function onClick() {
  img.src =
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
  txt.value = report;
  btn5.style.backgroundColor = "blue";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "white";
  btn4.style.backgroundColor = "white";
  btn1.style.backgroundColor = "white";
  c=5;
});
