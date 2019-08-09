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
// CODE FOR ALERT BASED TASK ENTERING

// function addItem() {
//   var taskName = prompt("please enter task name");
//   var taskHour = parseInt(prompt("how many hours"));
//   var taskMin = parseInt(prompt("how many minute"));
//   var taskSecond = parseInt(prompt("how many seconds"));
//   if (taskName != null) {
//     if (isNaN(taskHour)){
//       taskHour = 0
//     }
//     if (isNaN(taskMin)){
//       taskMin = 0
//     }
//     if (isNaN(taskSecond)){
//       taskSecond = 0
//     }
//
//     let x = document.createElement("li");
//     x.innerText = taskName;
//     items.push({ "name": taskName, "hour": taskHour, "min": taskMin, "second": taskSecond })
//     list.append(x);
//   }
// }
//
// // Get the modal
// var modal = document.getElementById('id01');
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
//                 |
// FIX THIS LATER \|/
//                 `
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getDate() + 1;
// var yyyy = today.getFullYear();
// if (dd < 10) {
//   dd = "0" + dd
// }
// if (mm < 10) {
//   mm = "0" + mm
// }
// if (yyyy < 10) {
//   yyyy = "0" + yyyy
// }
// today = yyyy + "-" + mm + "-" + dd;
// document.getElementById("datefield").setAttribute("min", today);



// harvest data from pop up and adds it to list

function addtask() {
  document.getElementById('id01').style.display='none';
  var taskName1 = document.getElementById("taskName").value;
  var hour1 = document.getElementById("hour").value;
  var minute1= document.getElementById("minute").value;
  var second1= document.getElementById("second").value;
  console.log("task name is: " + taskName1);
  console.log( "Hour value is: " +hour1);
  console.log("Minute value is: " +minute1);
  console.log("Seconds value is: " +second1);
  let x = document.createElement("li");
  x.innerText = taskName1;
  items.push({ "name": taskName1, "hour": hour1, "min": minute1, "second": second1 });
  list.append(x);


  // console.log("hi")
  // console.log(taskName1);
  // return taskName1;
}
