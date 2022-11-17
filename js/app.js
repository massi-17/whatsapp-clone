let chat = document.querySelector('.chat')
let inputText = document.getElementById('inputText')




let today = new Date()

let texts = []

    
// texts.push(`${inputText.value[i]}`)
// localStorage.setItem('text', JSON.stringify(texts));

  
function stampMsg() {
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

 
  setTimeout(function() {
    icon.classList.add('read')
   
    
    texts.push(msgText.innerHTML)
    console.log(texts)
    localStorage.setItem('text', JSON.stringify(texts));
  }, 2000)
}


inputText.addEventListener("keypress", event => {

  if (event.key === "Enter") {
    event.preventDefault()
    stampMsg()
    inputText.value = ''
 
    }
})


let archiviati = JSON.parse(localStorage.getItem('text'))

vecchi()

function vecchi() {

  for (let i = 0; i < archiviati.length; i++) {
    console.log(archiviati[i])
  const message = document.createElement("div");
  message.classList.add('message')
  chat.appendChild(message)
  let msgText = document.createElement('div')
  msgText.innerHTML = archiviati[i]
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
  icon.classList.add('read')
  span.appendChild(icon)
  
 }
}


