// import "./styles.css";
let ttl = ["a", "b", "c", "d", "e"]; //array for storing title;
let srce = ["a", "b", "c", "d", "e"]; //array for storing source url;
let btnid = ["btn1", "btn2", "btn3", "btn4", "btn5"]; //array for storing button ids;
let tt = ["a", "b", "c", "d", "e"]; //array for class of text title;
let c = 1; //counter to see which button was clicked last;

ttl[0] = " cat.jpeg";
ttl[1] =
  " a man and a woman trying to cook a meal together in a modern kitchen.jpg";
ttl[2] = " bali-kelingking-beach-plastic-removal-drive.key";
ttl[3] = " NextByk Investor Pitch 2022.ppt";
ttl[4] = " interns-performance-report-may-2022.key";

srce[0] =
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
srce[1] =
  "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
srce[2] =
  "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
srce[3] =
  "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
srce[4] =
  "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";

//adding the images and text;
document.getElementById("app").innerHTML = `
<div class="container" id="container">
  <div class="lines">
    <ul class="no-bullets">
      <li class="cat"><button id=${btnid[0]} class="click"><img src=${
  srce[0]
} ><div id=${tt[0]}> ${fun(ttl[0])}</div></button></li>
      <li class="couple"><button id=${btnid[1]} class="click"><img src=${
  srce[1]
} ><div id=${tt[1]}> ${fun(ttl[1])}</div></button></li>
      <li class="beach"><button id=${btnid[2]} class="click"><img src=${
  srce[2]
} ><div id=${tt[2]}> ${fun(ttl[2])}</div></button></li>
      <li class="pitch"><button id=${btnid[3]} class="click"><img src=${
  srce[3]
} ><div id=${tt[3]}> ${fun(ttl[3])}</div></button></li>
      <li class="report"><button id=${btnid[4]} class="click"><img src=${
  srce[4]
} ><div id=${tt[4]}> ${fun(ttl[4])}</div></button></li>
    </ul>
  </div>
  <div>
    <ul>
      <li><img id="imag" src=${srce[0]}></li>
      <li><textarea class="inpt" type="text" id="Txt" value=${ttl[0]}>${
  ttl[0]
}</textarea></li>
    </ul>
  </div>
</div>
`;

const btn = ["b1", "b2", "b3", "b4", "b5"]; //array for storing objects of each button;

for (let i = 0; i < 5; i++) {
  btn[i] = document.getElementById(btnid[i]);
}

const txt = document.getElementById("Txt"); //storing object of the text below big image
const img = document.getElementById("imag"); //storing object of the big image

function fun(str) {
  //creating dots between title is length exceeds 36
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

function def() {
  //making background and text colors back to default
  for (let i = 0; i < 5; i++) {
    btn[i].style.backgroundColor = "white";
    btn[i].style.color = "black";
  }
}

function clic() {
  //click triggered on using up and down arrow keys.
  btn[c - 1].click();
}

//changing txt and title on pressing enter
txt.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var inp = txt.value;
    ttl[c - 1] = inp;
    document.getElementById(tt[c - 1]).innerHTML = `${fun(inp)}`;
  }
});

//changing txt and title on clicking any button
for (let i = 0; i < 5; i++) {
  btn[i].addEventListener("click", function onClick() {
    img.src = srce[i];
    txt.value = ttl[i];
    def();
    btn[i].style.backgroundColor = "blue";
    btn[i].style.color = "white";
    c = i + 1;
  });
}

//clicking buttons on using up and down arrow keys.
document.addEventListener("keydown", function (eve) {
  if (eve.keyCode === 38 && c > 1) {
    c = c - 1;
    clic();
  }
  if (eve.keyCode === 40 && c < 5) {
    c = c + 1;
    clic();
  }
});
