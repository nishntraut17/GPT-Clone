import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector('form');
const chatContainer = document.querySelector("#chat-container");

let loadInterval;

function loader(elememt){
  elememt.textContent = "";

  loadInterval = setInterval(()=>{
    elememt.textContent +='.';
    if(elememt.textContent === "...."){
      elememt.textContent ="";
    }
  },300)
}

function typeText(element,text){
  let index = 0;
  let interval = setInterval(()=>{
    if(index < text.length){
      element.innerHTML += text.chatAt(index);
      index++;
    }
    else {
      clearInterval(interval);
    }
  },20)
}

function generateUniqueId() {
  const timestamp = Date.now();
  const random = Math.random();
  const hexaDecimalString = random.toString(16);
  return `id-${timestamp}-${hexaDecimalString}`;
}

function chatStripe (isAi, value, uniqueId) {
  return (
    `
    hello world
    `
  )
}

const handleSubmit = async (e) => {
  // e.preventDefault();
  const data = new FormData(form);
  const uniqueId = generateUniqueId();

  //user's chat stripe
  chatContainer.innerHTML += chatStripe(false,data.get('prompt'));

  form.reset();

  //bot stripe chat
  // const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true," ",uniqueId);

  chatContainer.scrollTop = chatContainer.scrollHeight;

  const messageDiv = document.getElementById(uniqueId);
  loader(messageDiv);
}

form.addEventListener('submit',handleSubmit);
form.addEventListener('keyup',(e)=>{
  if(e.key === 'Enter'){
    handleSubmit(e);
  }
})