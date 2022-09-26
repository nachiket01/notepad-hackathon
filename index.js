
let btn = document.querySelector(".btn");
let container = document.querySelector(".container");

btn.addEventListener("click", ()=>{
  const div= document.createElement("div");
  div.innerHTML=`
  
<div id="text-input" contenteditable="true"></div>`
container.appendChild(div);
})
let optionsButtons = document.querySelectorAll(".option-button");
let copy = document.getElementById("copy");

let text = document.getElementById("text-input");

// let writingArea = document.getElementById("text-input");


//Initial Settings

const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};
//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
   console.log("click");
  });
});

function copyDivToClipboard() {
  // Get the text field
  var copyText = document.getElementById("text-input");
  // Select the text field
  
  copyText = copyText.textContent;
  
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  
  // Alert the copied text
  alert("Note copied to clipboard");
}
