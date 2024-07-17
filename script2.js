let icon = document.querySelector("#icon");
let menu = document.querySelector(".menucontent");

let clk = 1;
icon.addEventListener("click", function(){
    if(clk==1){
        menu.style.display = 'block';
        clk = 0;
    }
    else{
        menu.style.display = 'none';
        clk = 1;
    }
})