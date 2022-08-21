var x = window.matchMedia("(max-width: 416px)")
if (x.matches) { 
 let pos=150;
let posleft=200;
function up(){
   if(pos>=10){
       pos -=5;
       document.querySelector('img').style.top=pos+"px";
   }
}
function down(){
   if(pos<=555){
       pos +=5;
       document.querySelector('img').style.top=pos+"px";
   }
}
function left(){
   if(posleft>=10){
       posleft -=5;
       document.querySelector('img').style.left=posleft+"px";
   }
}
function right(){
   if(posleft<=258){
       posleft +=5;
       document.querySelector('img').style.left=posleft+"px";
   }
}
} else {
 let pos=250;
let posleft=680;
function up(){
   if(pos>=10){
       pos -=5;
       document.querySelector('img').style.top=pos+"px";
   }
}
function down(){
   if(pos<=645){
       pos +=5;
       document.querySelector('img').style.top=pos+"px";
   }
}
function left(){
   if(posleft>=10){
       posleft -=5;
       document.querySelector('img').style.left=posleft+"px";
   }
}
function right(){
   if(posleft<=1320){
       posleft +=5;
       document.querySelector('img').style.left=posleft+"px";
   }
}
}