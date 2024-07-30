
let btn1 = document.getElementById("left-side-btn");
let btn2 = document.getElementById("right-side-btn");
let copyDiv = document.querySelector(".copycode");
let rgb1 = " #D4145A"
let rgb2 = "#FBB03B"



const hexvalue = ()=>{
let myHexaValues = "0123456789abcdef";
let color ="#"

    for(let i = 0; i<6;i++){
        color = color + myHexaValues[Math.floor(Math.random()*16)];
       
    }
  return color;
}






const handelbutton1 = ()=>{
     rgb1 = hexvalue();
    console.log(rgb1);
document.querySelector(".main-section").style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2});`
btn1.innerHTML = rgb1;

btn1.style.backgroundColor = `${rgb1}`



   
}

const handelbutton2 = ()=>{
     rgb2 = hexvalue();
    console.log(rgb2);
    document.querySelector(".main-section").style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`
   copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2});`
   btn2.style.backgroundColor = `${rgb2}`
    btn2.innerHTML = rgb2

   
}


  

btn1.addEventListener("click",handelbutton1);
btn2.addEventListener("click",handelbutton2);

copyDiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
});
