let idEl = document.getElementById("advice_id");
let messageEl = document.getElementById("advice_message");

/**
 * Sets Advice detail to the element
 * @param {number} id Advice Id
 * @param {string} advice Advice message
 */
function setAdvice(id, advice) {
  idEl.innerText = id;
  messageEl.innerText = advice;
}

/**
 * Generate Advice and render
 */
async function generateAdvice() {
  const {
    slip: { id, advice },
  } = await fetchAdvice();
  setAdvice(id, advice);
}

/**
 * Fetches random advice from the server
 * @returns {slip:{id:number, advice:string}}
 */
async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    return await response.json();
  } catch (err) {
    alert("Opps! Something went wrong. Try again in some time.");
  }
}
window.onload = () => {
  generateAdvice();
};
