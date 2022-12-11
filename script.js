function reszie(){
    var scroll = this.scrollY;
    var width = this.innerWidth;

    switch(true){
        case(width < 713):
        document.getElementById("name").style.fontSize = "30px";
        document.getElementById("about").style.fontSize = "15px";
        document.getElementById("instagram").style.fontSize = "15px";
        break;

        case(width > 713):
        if(scroll > 41){
            document.getElementById("name").style.fontSize = "16px";
            document.getElementById("about").style.fontSize = "13px";
            document.getElementById("instagram").style.fontSize = "13px";
        }else{
            document.getElementById("name").style.fontSize = "30px";
            document.getElementById("about").style.fontSize = "15px";
            document.getElementById("instagram").style.fontSize = "15px";
        }
        break;
    }
}
function menu(x) {
    x.classList.toggle("change");
  }

  y = 0;
  function drop_menu(){
    if(y === 0){
        document.getElementById("dropdown-content").style.display = "block"
        y++;
    }else{
        document.getElementById("dropdown-content").style.display = "none"
        y--;
    }
  }

window.onscroll= function(){
    reszie();
};

window.onload= function(){
    reszie();
};

window.onresize= function(){
    reszie();
};