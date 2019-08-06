var counter = 1;
var list = document.getElementById("taskList");

function timeFunct(){
  var taskName = prompt("please enter task name");

  if (taskName != null){
    let x = document.createElement("li");
    x.innerText = taskName;
    list.append(x);
    // document.getElementById(`listItem${counter}`).innerText = taskName;
    counter ++;
  }
}
