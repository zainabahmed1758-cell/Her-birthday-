function openGift(){

document.getElementById("giftPage").style.display="none";
document.getElementById("messagePage").style.display="flex";

for(let i=0;i<30;i++){

let heart=document.createElement("div");
heart.innerHTML="❤️";
heart.className="heart";

heart.style.left=Math.random()*100+"vw";
heart.style.top="80vh";

document.body.appendChild(heart);

setTimeout(()=>{heart.remove()},3000)

}

}

function openSurprise(){

document.getElementById("messagePage").style.display="none";
document.getElementById("surprisePage").style.display="flex";

}
for(let i=0;i<12;i++){

let b=document.createElement("div");

b.innerHTML="🦋";
b.className="butterfly";

b.style.left=Math.random()*100+"vw";
b.style.animationDuration=(6+Math.random()*6)+"s";

document.querySelector(".butterflies").appendChild(b);

}