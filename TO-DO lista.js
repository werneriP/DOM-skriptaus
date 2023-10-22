const syöttökenttä = document.getElementById('syöttökenttä');
const listanSisältö = document.getElementById('tehtävä');

function lisääTehtävä(){
  if(syöttökenttä.value.length <3){
    syöttökenttä.style.border = "2px dotted red";
    syöttökenttä.style.borderRadius = "40px";
    alert("Tehtävän täytyy olla vähintään 3 merkkiä pitkä!");
  }


  else  {
    
    syöttökenttä.style.border = "none";
    syöttökenttä.style.borderRadius = "0";
    let li = document.createElement("li");
    li.innerHTML = syöttökenttä.value;
    listanSisältö.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  syöttökenttä.value = '';
  saveData();
}

listanSisältö.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("tehty");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data",listanSisältö.innerHTML);
}

function näytäTehtävät(){
  listanSisältö.innerHTML = localStorage.getItem("data");
}
näytäTehtävät();