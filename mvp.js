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

var list = document.getElementById("taskList");
var items = []

function timeFunct() {
  if (st == "stopped") {
    if (items.length > 0) {
      var i = items.pop(0);
      document.getElementById("currenttask").innerText = "WOwrking on " + i["name"];
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


function addItem() {
  var taskName = prompt("please enter task name");
  var taskHour = parseInt(prompt("how many hours"));
  var taskMin = parseInt(prompt("how many minute"));
  var taskSecond = parseInt(prompt("how many seconds"));
  if (taskName != null) {
    if (isNaN(taskHour)){
      taskHour = 0
    } 
    if (isNaN(taskMin)){
      taskMin = 0
    } 
    if (isNaN(taskSecond)){
      taskSecond = 0
    } 

    let x = document.createElement("li");
    x.innerText = taskName;
    items.push({ "name": taskName, "hour": taskHour, "min": taskMin, "second": taskSecond })
    list.append(x);
  }
}
