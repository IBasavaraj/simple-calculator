const screen = document.getElementById('screen');
let screenValue = "";
document.querySelectorAll('td').forEach(item=> {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == 'c') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })})
