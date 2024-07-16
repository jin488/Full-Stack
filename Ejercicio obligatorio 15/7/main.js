let uno = document.querySelector("#uno")
let dos = document.querySelector("#dos")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")


function changeVisibilityVisible1 (){
    document.body.classList.remove("divVisible2");
    document.body.classList.remove("divHidden2");
    document.body.classList.remove("buttonHidden");
    document.body.classList.remove("buttonVisible2");
    document.body.classList.add("buttonVisible1");
    uno.style.display = "block";
}


function changeVisibility2 (){
 
    document.body.classList.add("divVisible2");
    document.body.classList.add("divHidden2");
    document.body.classList.add("buttonHidden");
    document.body.classList.add("buttonVisible2");
    document.body.classList.remove("buttonVisible1");
    dos.style.display = "block";
}



btn1.addEventListener("click", () => {
    changeVisibility2()
})


btn2.addEventListener("click", () => {
    changeVisibilityVisible1()
})