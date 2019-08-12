var hour = 0, minute = 0, second = 0; //variable store the timer
var st = "stopped";

//takes hour and returns a string, to be used in display
function convertHour() {
  if (hour == 0) {
    return "";
  }
  else {
    return `${hour}:`;
  }
}

//takes minute and converts to display string
function convertMin() {
  if (minute == 0) {
    return "00:"; //display _:00:_ seconds
  }
  else if (minute >= 1 && minute <= 9) {
    return `0${minute}:`; //[1, 9]
  }
  else {
    return `${minute}:`; //[10, 59]
  }
}

function convertSecond() {
  if (second == 0) {
    return "00 seconds"
  }
  else if (second >= 1 && second <= 9) {
    return `0${second} seconds`;
  }
  else {
    return `${second} seconds`;
  }
}

function genTimer() {
  var timer = document.getElementById("timer");
  var str = `${convertHour()}${convertMin()}${convertSecond()}`
  timer.innerHTML = `<span>${str}</span>`
}

// code for timer

function countDown() {
  if (second == 0) {
    if (minute == 0) {
      if (hour == 0) {
        st = "stopped"; //update status because we've counted down
        clearInterval(timer);
        //TODO: go onto next task
      }
      else {
        second = 59;
        minute = 59;
        hour -= 1;
      }
    }
    else {
      second = 59;
      minute -= 1;
    }
  }
  else {
    second -= 1;
  }
  genTimer();
}

// code for task list display

var list = document.getElementById("taskList");
var items = []

// code to update task list with timer so they both work in sync

function timeFunct() {
  if (st == "stopped") {
    if (items.length > 0) {
      var i = items.pop(0);
      document.getElementById("currenttask").innerText = "Working on " + i["name"];
      hour = i["hour"];
      minute = i["min"];
      second = i["second"];
      st = "running";
      timer = setInterval(countDown, 1000);
    }
    else {
      alert("No tasks right now!");
    }
  }
  else {
    alert("Task in progress");
  }
}

function orderByDate(){
  items.sort(function(a, b){
    if (a["date"] > b["date"]){
      return 1;
    }
    else{
      return -1;
    }
  })
  reloadDom();
}

function reloadDom(){
  var listItems = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++){
    listItems[i].innerText = items[i]["name"]
  }
}

function addtask() {
  let details = ["taskName", "hour", "minute", "second", "datefield", "priority"];
  let values = []

  for(var i = 0; i < details.length; i++){
    let val = document.getElementById(details[i]).value;
    if (val){
      values.push(val);
    }
    else{
      alert("Field is reqired!");
      return;
    }
  }

  if(values[1] == 0 && values[2] == 0 && values[3] == 0){
    alert("Empty task?");
    return;
  }

  let x = document.createElement("li");
  x.innerText = values[0];
  items.push({ "name": values[0], "hour": values[1], "min": values[2], "second": values[3], "date":values[4], "priority":values[5]});
  list.append(x);
  document.getElementById('id01').style.display='none';

  orderByDate();
}
