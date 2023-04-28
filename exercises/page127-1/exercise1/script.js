window.onload = init;

function init() {
    const greetBtn = document.getElementById('greetBtn');
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
    const nameField = document.getElementById('nameField');
    const name = nameField.value;
    const greeting = `Hello ${name}!`;
    alert(greeting);
}
