  var counter = 1;

function timeFunct(){
  var taskName = prompt("please enter task name");

  if (taskName != null){
    document.getElementById(`listItem${counter}`).innerText = taskName;
    counter ++;
  }
}
