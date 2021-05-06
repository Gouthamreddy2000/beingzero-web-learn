function func1(val){
z=document.getElementById("color")
a=document.getElementById("one");
b=document.getElementById("three");
c=document.getElementById("five");
let rgb="rgb("+a.value+","+b.value+","+c.value+")";
z.style.backgroundColor=rgb;
document.getElementById("two").innerHTML=a.value;
document.getElementById("four").innerHTML=b.value;
document.getElementById("six").innerHTML=c.value;
document.getElementById("a").innerHTML=a.value;
document.getElementById("b").innerHTML=b.value;
document.getElementById("c").innerHTML=c.value;
}
