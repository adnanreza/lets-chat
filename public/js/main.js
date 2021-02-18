const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages')

const socket = io();

socket.on('message', msg => {
  console.log(msg)
  outputMessage(msg);

  //Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
})

// Message submitted
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  const msgE = e.target.elements.msgE.value;

  // Emit message to server
  socket.emit('chatMessage', msgE)

  // Clear input
  e.target.elements.msgE.value = '';
  e.target.elements.msgE.focus();
})

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
  <p class="text">
    ${message}
  </p>`;
  document.querySelector('.chat-messages').appendChild(div);
}