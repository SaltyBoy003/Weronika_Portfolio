let z = 0;

function menu(x) {
    x.classList.toggle("change");
  }

  function drop_menu(){
    if(z === 0){
        document.getElementById("dropdown-content").style.display = "block"
        z++;
    }else{
        document.getElementById("dropdown-content").style.display = "none"
        z--;
    }
  }