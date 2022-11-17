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
      localStorage.setItem('text', JSON.stringify(texts))
    
    
  }, 2000)
}


inputText.addEventListener("keypress", event => {

  if (event.key === "Enter") {
    event.preventDefault()
    stampMsg()
    inputText.value = ''
 
    }
})






function loadTexts() {
  let archiviati = localStorage.getItem('text')
  texts = JSON.parse(archiviati)
  for (let i = 0; i < texts.length; i++) {
    console.log(texts[i])
  const message = document.createElement("div");
  message.classList.add('message')
  chat.appendChild(message)
  let msgText = document.createElement('div')
  msgText.innerHTML = texts[i]
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


loadTexts()