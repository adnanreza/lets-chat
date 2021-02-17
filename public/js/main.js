const chatForm = document.getElementById('chat-form');

const socket = io();

socket.on('message', msg => {
  console.log(msg)
})

// Message submitted
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msgE = e.target.elements.msgE.value;

  console.log(msgE)
})