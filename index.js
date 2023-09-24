function gradeTotal(){


const grade = 1000

if (grade <0 || grade >100){
  console.log('Enter a valid grade!')
} 
 else if (grade > 79){
  grade = 'A';
}
else if (grade >= 60 && grade <=79){
  grade ='B';
}
else if (grade >=59 && grade <=69){
  grade = "C";
}
else if (grade >=40 && grade <=49){
  grade = 'D';
}
 else if (grade < 40){
  grade = "E";
 }
// else if(grade < 0 && grade > 100){
//   console.log('Enter a valid grade');
// }
}
console.log(gradeTotal);