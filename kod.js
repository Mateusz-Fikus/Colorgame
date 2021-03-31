var difficulty = 6;
var kolory = generator(difficulty);
var kwadraty = document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
easyBtn.addEventListener("click", function(){
 easyBtn.classList.add("selected");
 hardBtn.classList.remove("selected");
 kolory =  generator(3);
 pickedColor = pickColor()
 colorDisplay.textContent = pickedColor;
 difficulty = 3;
 for(var i = 0; i < kwadraty.length; i++){
     if(kolory[i]){
        kwadraty[i].style.backgroundColor = kolory[i];
     }else{
     
        kwadraty[i].style.display = "none";
    }
    kwadraty[i].style.backgroundColor = kolory[i];
    h1.style.backgroundColor = "steelblue";
    document.getElementById("message").textContent = ""
    document.getElementById("reset").textContent = "New Colors";
}
})
hardBtn.addEventListener("click", function(){
 hardBtn.classList.add("selected");
 easyBtn.classList.remove("selected");
 kolory =  generator(6);
 pickedColor = pickColor()
 colorDisplay.textContent = pickedColor;
 difficulty = 6;
 for(var i = 0; i < kwadraty.length; i++){
    if(kolory[i]){
        kwadraty[i].style.backgroundColor = kolory[i];
        kwadraty[i].style.display = "block";
   }
   kwadraty[i].style.backgroundColor = kolory[i];
   h1.style.backgroundColor = "steelblue";
   document.getElementById("message").textContent = ""
   document.getElementById("reset").textContent = "New Colors";
}
})
reset.addEventListener("click", function(){
    kolory =  generator(difficulty);
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < kwadraty.length; i++){
        kwadraty[i].style.backgroundColor = kolory[i];
        h1.style.backgroundColor = "steelblue";
        document.getElementById("message").textContent = ""
        this.textContent = "New Colors";
}
});
colorDisplay.textContent = pickedColor;
for(var i = 0; i < kwadraty.length; i++){
    kwadraty[i].style.backgroundColor = kolory[i];
    kwadraty[i].addEventListener("click", function(){
        var wybrany = this.style.backgroundColor;
        if(wybrany == pickedColor){
            document.getElementById("message").textContent = "Good job!";
            changeColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            document.getElementById("reset").textContent = "Play Again?";
        }else{
            this.style.backgroundColor = "#232323";
            document.getElementById("message").textContent = "Try again!";
        }
    })
}
function changeColor(color){
    for(var i = 0; i < kwadraty.length; i++){
    kwadraty[i].style.backgroundColor = color;
    }
}
function pickColor(){
   let wybrany = Math.floor(Math.random() * kolory.length);
   return kolory[wybrany];
}
function generator(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}
function randomColor(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}
