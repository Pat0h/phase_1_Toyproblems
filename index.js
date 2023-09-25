
function totalGrade(){
  if (mark < 0 || mark >100){
    console.log('Please enter valid marks!')
  }else if (mark > 79){
  return 'A';
}
else if (mark >= 60){
return 'B';
}else if (mark >= 49){
  return ' C';
}else if (mark >= 40){
  return 'D';
} else {
  return 'E'
}
}

function getUserInputAndCalculateGrade() {
  const mark = parseFloat(prompt("Enter the student's mark (between 0 and 100):"));

}
totalGrade();