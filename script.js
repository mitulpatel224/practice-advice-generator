let idEl = document.getElementById("advice_id");
let messageEl = document.getElementById("advice_message");

function setAdvice(id, advice) {
  idEl.innerText = id;
  messageEl.innerText = advice;
}

async function generateAdvice() {
  const {
    slip: { id, advice },
  } = await fetchAdvice();
  setAdvice(id, advice);
}

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    return await response.json();
  } catch (err) {
    alert("Opps! Something went wrong. Try again in some time.");
  }
}
