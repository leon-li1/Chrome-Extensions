//console.log("HEllO");
let paragraphs = document.getElementsByTagName("p");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.txt === "hello") {
    for (para of paragraphs) {
      para.style["background-color"] = "#FF00FF";
    }
  }
}
