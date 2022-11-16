let chat = document.querySelector('.chat')
let inputText = document.getElementById('inputText')




let today = new Date();
inputText.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      event.preventDefault();
    //   chat.innerHTML += `<div class="message">
    //                         <div>${inputText.value}</div>
    //                         <span class="time">
    //                             ${today.getHours()}:${today.getMinutes()}
    //                             ${icon}
    //                         </span>
    //                       </div>  
    //                      `

const message = document.createElement("div");
message.classList.add('message')
chat.appendChild(message)
let msgText = document.createElement('div')
msgText.innerHTML = inputText.value
message.appendChild(msgText)

let span = document.createElement('span')
span.classList.add('time')
message.appendChild(span)


let date = document.createElement('div')
date.classList.add('nowTime')
date.innerHTML = today.getHours() + ':' + today.getMinutes()

span.appendChild(date)

let icon = document.createElement("i");
icon.classList.add('fa')
icon.classList.add('fa-check-double')
span.appendChild(icon)
     

inputText.value = ''

setTimeout(function() {
    icon.classList.add('read')
  }, 5000);
    }
})





