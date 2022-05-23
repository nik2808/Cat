// import "./styles.css";

let cat = " cat.jpeg",
  couple =
    " a man and a woman trying to cook a meal together in a modern kitchen.jpg",
  beach = " bali-kelingking-beach-plastic-removal-drive.key",
  pitch = " NextByk Investor Pitch 2022.ppt",
  report = " interns-performance-report-may-2022.key";
let c = 1;
let cat_sourc =
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
let couple_sourc =
  "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
let beach_sourc =
  "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
let pitch_sourc =
  "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
let report_sourc =
  "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";

document.getElementById("app").innerHTML = `
<div class="container" id="container">
  <div class="lines">
    <ul class="no-bullets">
      <li class="cat"><button id="btn1" class="click"><img src=${cat_sourc} ><div id="one"> ${fun(
  cat
)}</div></button></li>
      <li class="couple"><button id="btn2" class="click"><img src=${couple_sourc} ><div id="two"> ${fun(
  couple
)}</div></button></li>
      <li class="beach"><button id="btn3" class="click"><img src=${beach_sourc} ><div id="three"> ${fun(
  beach
)}</div></button></li>
      <li class="pitch"><button id="btn4" class="click"><img src=${pitch_sourc} ><div id="four"> ${fun(
  pitch
)}</div></button></li>
      <li class="report"><button id="btn5" class="click"><img src=${report_sourc} ><div id="five"> ${fun(
  report
)}</div></button></li>
    </ul>
  </div>
  <div>
    <ul>
      <li><img id="imag" src=${cat_sourc}></li>
      <li><textarea class="inpt" type="text" id="Txt" value=${cat}>${cat}</textarea></li>
    </ul>
  </div>
</div>
`;

function fun(str) {
  const n = str.length;
  const max_len = 36;
  const len_half = max_len / 2 - 1;
  if (n > max_len) {
    const st1 = str.substr(0, len_half);
    const st2 = str.substr(n - len_half);
    str = st1 + ".." + st2;
  }
  return str;
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const txt = document.getElementById("Txt");
const img = document.getElementById("imag");

function def() {
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "white";
  btn4.style.backgroundColor = "white";
  btn5.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn2.style.color = "black";
  btn3.style.color = "black";
  btn4.style.color = "black";
  btn5.style.color = "black";
}

txt.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var inp = txt.value;
    if (c === 1) {
      cat = inp;
      document.getElementById("one").innerHTML = `${fun(inp)}`;
    }
    if (c === 2) {
      couple = inp;
      document.getElementById("two").innerHTML = `${fun(inp)}`;
    }
    if (c === 3) {
      beach = inp;
      document.getElementById("three").innerHTML = `${fun(inp)}`;
    }
    if (c === 4) {
      pitch = inp;
      document.getElementById("four").innerHTML = `${fun(inp)}`;
    }
    if (c === 5) {
      report = inp;
      document.getElementById("five").innerHTML = `${fun(inp)}`;
    }
  }
});

btn1.addEventListener("click", function onClick() {
  img.src = cat_sourc;
  txt.value = cat;
  def();
  btn1.style.backgroundColor = "blue";
  btn1.style.color = "white";
  c = 1;
});

btn2.addEventListener("click", function onClick() {
  img.src = couple_sourc;
  txt.value = couple;
  def();
  btn2.style.backgroundColor = "blue";
  btn2.style.color = "white";
  c = 2;
});

btn3.addEventListener("click", function onClick() {
  img.src = beach_sourc;
  txt.value = beach;
  def();
  btn3.style.backgroundColor = "blue";
  btn3.style.color = "white";
  c = 3;
});

btn4.addEventListener("click", function onClick() {
  img.src = pitch_sourc;
  txt.value = pitch;
  def();
  btn4.style.backgroundColor = "blue";
  btn4.style.color = "white";
  c = 4;
});

btn5.addEventListener("click", function onClick() {
  img.src = report_sourc;
  txt.value = report;
  def();
  btn5.style.backgroundColor = "blue";
  btn5.style.color = "white";
  c = 5;
});

/*document.addEventListener("keydown", function (eve) {
  if (eve.keyCode === 38) {
    c = c - 1;
    if (c < 1) {
      c = 1;
    }
  }
  if (eve.keyCode === 40) {
    c = c + 1;
    if (c > 5) {
      c = 5;
    }
  }
  if (c === 1) {
    btn1.click();
  }
  if (c === 2) {
    btn2.click();
  }
  if (c === 3) {
    btn3.click();
  }
  if (c === 4) {
    btn4.click();
  }
  if (c === 5) {
    btn5.click();
  }
});*/
