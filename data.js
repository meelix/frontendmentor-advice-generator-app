const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
};

window.onload = newAdvice;
function newAdvice() {
    fetch('https://api.adviceslip.com/advice', options)
        .then(response => response.json())
        .then(data => {
            data = data.slip
            document.getElementById("title").textContent = `Advice #${data.id}`;
            document.getElementById("advice").textContent = `${data.advice}`;
        })
        .catch(console.error);
}

document.getElementById("new").addEventListener("click", () => newAdvice())