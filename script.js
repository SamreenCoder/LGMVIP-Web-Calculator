function Dic(val){
    document.getElementById('tablebox').value+=val;
}
function clr(){
    document.getElementById('tablebox').value="";
}
function equal(){
    var a=document.getElementById('tablebox').value;
    var b= eval(a);
    document.getElementById('tablebox').value=b;
}
function Del(){
    tablebox.value=tablebox.value.substring(0,tablebox.value.length-1);
}
function cos(){
    tablebox.value=Math.cos(tablebox.value);
}
function sin(){
    tablebox.value=Math.sin(tablebox.value);
}
function tan(){
    tablebox.value=Math.tan(tablebox.value);
}
// function squareroot(){
//     tablebox.value=Math.squareroot(tablebox.value);
// }
function log(){
    tablebox.value=Math.log(tablebox.value);
}
// function induction(){
//     tablebox.value=Math.induction(tablebox.value);
// }                       
function square(){
    tablebox.value=eval(tablebox.value)*eval(tablebox.value);
}
function cube(){
   tablebox.value=eval(tablebox.value)*eval(tablebox.value)*eval(tablebox.value);
}
