var min = 30;
var seconds = 0;
var st = 1//0 means running already

function countDown(){
  if(seconds==0){
    min -= 1;
    seconds = 59;
  }
  else{
    seconds -= 1;
  }

  document.getElementById("timer").innerText= min +":"+ seconds ;
  if (min <= 0){
    clearInterval(timer);
    min = 30;
    seconds = 0;
    document.getElementById("timer").innerText= min +":"+ seconds ;
    st = 1;
  }
}

function timeFunct(){
  if(st == 0){

  }
  else{
    st = 0
    timer = setInterval(countDown, 1000);
  }
}
