//var number = 80;
//if(number >= 80) {
// console.log("grade A- one");
//console.log("excellect");
//if(number >= 70) {
//   console.log("grade A");
//   console.log("good")
//}
//if(number >= 60) {
//   console.log("grade b");
//   console.log("you need to improve");
//}
//if(number < 60) {
//  console.log("fail");
//  console.log("sorry");
//}
//}








var score = prompt("type your total marks of three");
Number(score);
var score2 = score/300*100
var totalmarks=300
//Math.trunc(score2);
if(score2>=80) {
    document.write("total marks "+": 300")
    document.write("</br>");
  
    if(score2>=80) {
        document.write("marks obtain"+":"+ score)
        document.write("</br>");
    }
    if(score2>=80) {
        document.write("persentage"+":"+ score2 +"%")
        document.write("</br>");
    }
    if(score2>=80) {
        document.write("grade"+":"+"a-one")
        document.write("</br>");
  }
    if(score2>=80) {
        document.write("remarks"+":"+"excellent")
        document.write("</br>");
    }
 }

else if(score2>=70) {
    document.write("total marks "+": 300")
    document.write("</br>");
  
    if(score2>=70) {
        document.write("marks obtain"+":"+ score)
        document.write("</br>");
    }
    if(score2>=70) {
        document.write("persentage"+":"+ score2 +"%")
        document.write("</br>");
    }
    if(score2>=70) {
        document.write("grade"+":"+"a")
        document.write("</br>");
  }
    if(score2>=70) {
        document.write("remarks"+":"+"good")
        document.write("</br>");
    }
 }
 

 else if(score2>=60) {
    document.write("total marks "+": 300")
    document.write("</br>");
  
    if(score2>=60) {
        document.write("marks obtain"+":"+ score)
        document.write("</br>");
    }
    if(score2>=60) {
        document.write("persentage"+":"+ score2 +"%")
        document.write("</br>");
    }
    if(score2>=60) {
        document.write("grade"+":"+"B")
        document.write("</br>");
  }
    if(score2>=60) {
        document.write("remarks"+":"+"you need to immprove")
        document.write("</br>");
    }
 }


 else if(score2<=60) {
    document.write("fail")
 }