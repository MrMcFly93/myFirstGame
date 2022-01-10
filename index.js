const character = document.getElementById("character")
const block = document.getElementById("block")

document.addEventListener("click", function(event){
    jump();
});

function jump(){
    if (character.classList != "jump"){
        character.classList.add("jump")
    }
    setTimeout(function(){
        character.classList.remove("jump")
    },500)
}

let isAlive = setInterval (function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    
    if (blockLeft < 50 && blockLeft > 0 && characterTop >= 140){
        
        alert("Game Over :'(")
     }
},10)