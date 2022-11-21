//DOM
let chat = document.querySelector('.chat')
let inputText = document.getElementById('inputText')

//variabili globali
let today = new Date()

// array dei messaggi
// let texts = []

//event listener
inputText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    sendText()
   
    inputText.value = ''
  }
})
let messaggi = []
//prende l'input value e lo manda come messaggio
function sendText() {
    const message = document.createElement('div')
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
    let icon = document.createElement('i')
    icon.classList.add('fa')
    icon.classList.add('fa-check-double')
    span.appendChild(icon)
    messaggi.push(msgText.innerHTML)
        //li salvo sul local storage
        localStorage.setItem('text', JSON.stringify(messaggi))
    // dopo 2 secondi fa diventare le spunte blu
    setTimeout(function () {
        icon.classList.add('read')

        //sicuramente non è corretto ma ho dovuto inserire questa parte dentro al Timeout perchè se no il dato da inserire nell'array non esisteva dato che sarebbe stato inserito dall'utente, vorrei capire questa cosa come si fa correttamente
        //qua pusha i messaggi nell'array dichiarato sopra
        // texts.push(msgText.innerHTML)
        // //li salvo sul local storage
        // localStorage.setItem('text', JSON.stringify(texts))
    }, 2000)
}

//ricarico nella pagina i messaggi precedentemente salvati nel local storage
let archiviati = []
let texts = []
archiviati = localStorage.getItem('text')
texts = JSON.parse(archiviati)
function getTexts() {
    
   
    console.log(texts)
    if (texts == null) {
        console.log('Array msg vuoto')
        
    } else if (texts.length >= 1) {
        console.log('carico i messaggi')
        
        loadTexts()
    }
}
getTexts()

function loadTexts() {

  for (let i = 0; i < texts.length; i++) {
    const message = document.createElement('div')
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
    let icon = document.createElement('i')
    icon.classList.add('fa')
    icon.classList.add('fa-check-double')
    icon.classList.add('read')
    span.appendChild(icon)
  }
}




