var birthDate = document.querySelector("#birthDate");
var luckyNumber = document.querySelector("#luckyNumber");
var find = document.getElementById('find');
var outputArea = document.querySelector("#output");

find.addEventListener('click', function myFunction(){
  var sum = calculateSum(birthDate.value);
  if(isLucky(sum)){
    outputArea.innerHTML="Cheers! Your birthday is lucky!!!";
  }else{
    outputArea.innerHTML="Better luck next life!!!";
  }
});

function calculateSum(birthDate){
  var sum = 0;
  birthDate = birthDate.replaceAll("-", "");
  for(i of birthDate){
    sum = sum + Number(i);
  }
  console.log(sum);
  return sum;
}

function isLucky(sum){
  console.log(luckyNumber.value);
  if(sum%luckyNumber.value == 0){
    return true;
  }else{
    return false;
  }
  
}



