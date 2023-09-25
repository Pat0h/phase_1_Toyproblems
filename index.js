

function totalGrade(mark){
  function inputGrade() {
    const mark = parseFloat(prompt("Enter the student's mark (between 0 and 100):"));
  
  }
  if (mark < 0 || mark >100){
    return 'Please enter valid marks!'
  }else if (mark > 79 && mark <=100){
  return 'A';
}
else if (mark >= 60 && mark <= 79){
return 'B';
}else if (mark >= 49 && mark <= 59){
  return ' C';
}else if (mark >= 40 && mark <= 50){
  return 'D';
} else {
  return 'E'
}

}


totalGrade();