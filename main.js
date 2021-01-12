name_of_the_student_array=[];
function Submitf() {
var name1= document.getElementById("student1").value;

var name2= document.getElementById("student2").value;

var name3= document.getElementById("student3").value;

var name4= document.getElementById("student4").value;

name_of_the_student_array.push(name1) ;

name_of_the_student_array.push(name2) ;

name_of_the_student_array.push(name3) ;

name_of_the_student_array.push(name4) ;

console.log("name_of_the_student_array");

document.getElementById("text").innerHTML= name_of_the_student_array;

document.getElementById("submit").style.display="none" ;

document.getElementById("sort").style.display="inline-block" ;
}

function sorting() {
name_of_the_student_array.sort();

document.getElementById("text").innerHTML= name_of_the_student_array;

console.log("name_of_the_student_array");


}
