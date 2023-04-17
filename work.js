var submitbtn = document.getElementById("btn");
submitbtn.addEventListener("click", Addlist);

function Addlist() {
  var inp = document.getElementById("inp");
  if (inp.value == null || inp.value == "") {
    alert("請重新輸入");
  } else {
    var newlists = document.getElementsByClassName("newlist");
    var delbtn = document.createElement("button");
    delbtn.setAttribute("class", "delbtn");
    delbtn.innerHTML = "X";

    // delbtn.innerHTML=;
    var litext = document.createElement("li");
    var lodiv = document.createElement("div");
    lodiv.setAttribute("class", "divcontainer");
    // lodiv.setAttribute("display", "flex");
    var pspace = document.createElement("p");
    pspace.setAttribute("class", "pspace");
    lodiv.append(litext);
    lodiv.append(pspace);
    lodiv.append(delbtn);

    newlists[0].append(lodiv);

    litext.innerText = inp.value;
    inp.value = null;
    delbtn.addEventListener("click", function () {
      lodiv.remove();
    });
  }
}
// delbtn.addEventListener("click", Deletelist);
// function Deletelist() {
//   var litext = document.createElement("li");
//   var target = e.target;
//   target.
//   if (target.classname === "delbtn") {
//     var targetparent = target.;
//     targetparent.remove();
//   }
