function hs_message() {
    var snakediv = document.createElement("div");
    var snakespan = document.createElement("span");
    var snakeb = document.createElement("b");
    snakespan.innerHTML = "Your top length is ";
    document.querySelector("#login").insertBefore(snakediv, login.childNodes[0]);
    document.querySelector("#login > div:nth-child(1)").setAttribute("class","snakediv");
    document.querySelector("#login > div.snakediv").setAttribute("style","margin-left: auto; margin-right: auto; text-align: center; margin-top: 40px; font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; font-size: 15px; color: #FFFFFF;");
    document.querySelector("#login > div.snakediv").appendChild(snakespan);
    document.querySelector("#login > div.snakediv > span").setAttribute("style","opacity: .45;")
    document.querySelector("#login > div.snakediv").appendChild(snakeb);
}
window.onload = hs_message()



