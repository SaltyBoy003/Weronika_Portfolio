function reszie(){
    var scroll = this.scrollY;
    var width = this.innerWidth;

    switch(true){
        case(width < 1024):
        document.getElementById("name").style.fontSize = "6.5vw";
        document.getElementById("header").style.width = "100vw";
            if(scroll > 35){
                document.getElementById("name").style.color = "white";
                document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                document.getElementById("dropdown-content").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                document.getElementById("menu").style.borderColor = "white";
                document.getElementById("about_menu").style.color = "white";
                document.getElementById("instagram_menu").style.color = "white";
                document.querySelectorAll(".bar").forEach((e) =>{
                    e.style.backgroundColor = "white";
                })
            }else{
                document.getElementById("name").style.color = "#383838";
                document.getElementById("header").style.backgroundColor = "transparent";
                document.getElementById("dropdown-content").style.backgroundColor = "#F8F8F8";
                document.getElementById("menu").style.borderColor = "#333";
                document.querySelectorAll(".bar").forEach((e) =>{
                    e.style.backgroundColor = "#383838";
                })
                document.getElementById("about_menu").style.color = "#444444";
                document.getElementById("instagram_menu").style.color = "#444444";
            }

            if(z === 1){
                document.getElementById("dropdown-content").style.display = "block"
            }
        break;

        case(width >= 1024):
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("name").style.color = "#383838";
        document.getElementById("header").style.backgroundColor = "transparent";
        const font_sizes = {
         "name": [2.5, 1.2],
         "about": [1.1, 0.9],
         "instagram": [1.1, 0.9]
        };

            if (scroll === 0) {
                for (let html_id in font_sizes) {
                    document.getElementById(html_id).style.fontSize = `${font_sizes[html_id][0]}vw`;
                }
                document.getElementById("header").style.width = "100vw";
            }

            if (scroll > 50) {
                for (let html_id in font_sizes) {
                    document.getElementById(html_id).style.fontSize = `${font_sizes[html_id][1]}vw`;
                }
                    document.getElementById("header").style.width = "400px";
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