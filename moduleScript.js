function init() {
  script.log("Custom module init");
}

function moduleParameterChanged(param) {
  script.log(param.name + " parameter changed");
}

function moduleValueChanged(value) {
}

function dataReceived(data) {
  //If mode is "Lines", you can expect data to be a single line String
  script.log("Data received : " + data);

  if (data.charAt(0) === "1") {
    script.logError(local.name + " : " + data);
  }  
  if (data === "NAK\n\n") {
    script.logError("message not understood by VideoHub");
  }
}

function sendToVideoHub(message) {
  script.log("sending message : " + message);
  local.send(message + "\n");
}

// Here are the callback functions for the commands

function route(source, destination) {
  BMsource = source-1;
  BMdestination = destination -1;
  sendToVideoHub("VIDEO OUTPUT ROUTING:\n"+BMdestination+" "+BMsource+"\n");
}

function sendCustomMessage(message) {
  sendToVideoHub(message);
}