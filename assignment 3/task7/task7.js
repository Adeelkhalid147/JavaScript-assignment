var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
document.write(a +"<br>");
document.write(b +"<br>");

function mergeandremovedublicate(a,b){
    var mergarray=[...a,...b];        //function bna k dono ko marge kren gy
    document.write(mergarray + "<br>");
    var newarr = [...new Set(mergarray)];  //[...new Set]dublicate ko remove krne k liye
    document.write(newarr);
}
mergeandremovedublicate(a,b);