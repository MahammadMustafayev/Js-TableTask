const btn=document.getElementById("ntb-ok");
const input=document.querySelectorAll("input");
const tr=document.querySelector("tr");
const table=document.querySelector("table");
let mdlbtn=document.getElementById("modalX");
let mdl=document.getElementById("onemodal");
let cl=document.getElementsByClassName("close")[0];
let cl2=document.getElementById("cl2");
let td=document.querySelector("td");

btn.addEventListener("click",function (el) {
    el.preventDefault();
    if (Del(input)) {
        td.classList.add("td");
        td.innerText=input.values;
    }
    tr.append(td);
})




function Del(elem) {
    if (elem.values.trim()="") {
        elem.nextElementSibling.classList.remove("d-none");
        return false; 
    }
    else{
        elem.nextElementSibling.classList.add("d-none");
        return true;
    }
}

function okX() {
    let x=document.querySelector(".new-add");
    if (x.style.display="none") {
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}

function clY() {
    let y=document.getElementById("new-add");
    y.style.display="none";
}


mdlbtn.addEventListener("click",function () {
    mdl.style.display="block";
})
cl.addEventListener("click",function () {
    mdl.style.display="none";
})

cl2.addEventListener("click",function () {
    td.parentElement.remove();
})





