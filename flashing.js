// JavaScript demonstration

function highlight(obj){
   var orig = obj.style.color;
   obj.style.color = 'red';
   setTimeout(function(){
        obj.style.color = orig;
   }, 5000);
}