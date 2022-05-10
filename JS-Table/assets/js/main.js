const btn=document.getElementById("ntb-ok");
const input=document.querySelectorAll("input");
const tr=document.querySelector("tr");
const table=document.querySelector("table");

btn.addEventListener("click",function (el) {
    el.preventDefault();
    if (Del(input)) {
        let td=document.createElement("td");
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




