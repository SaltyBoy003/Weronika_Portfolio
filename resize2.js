function reszie(){
    var scroll = this.scrollY;
    var width = this.innerWidth;

    switch(true){
        case(width < 1024):
        document.getElementById("name").style.fontSize = "6.5vw";
                document.getElementById("name").style.color = "#383838";
                document.getElementById("header").style.backgroundColor = "transparent";
                document.getElementById("menu").style.borderColor = "#333";
                document.getElementById("bar1").style.backgroundColor = "#383838";
                document.getElementById("bar2").style.backgroundColor = "#383838";
                document.getElementById("bar3").style.backgroundColor = "#383838";

            if(z === 1){
                document.getElementById("dropdown-content").style.display = "block"
            }
        break;

        case(width >= 1024):
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("name").style.color = "#383838";
        document.getElementById("header").style.backgroundColor = "transparent";
        const font_sizes = {
         "name": [3, 1.2],
         "home": [1.3, 0.9],
         "instagram": [1.3, 0.9]
        };

            if (scroll === 0) {
                for (let html_id in font_sizes) {
                    document.getElementById(html_id).style.fontSize = `${font_sizes[html_id][0]}vw`;
                }
            }

            if (scroll > 20) {
                for (let html_id in font_sizes) {
                    document.getElementById(html_id).style.fontSize = `${font_sizes[html_id][1]}vw`;
                }
            }
        break;
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