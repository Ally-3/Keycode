//1. welcome message
//2. generator waits for key to be entered
//3. key pressed generates: .code, .key and .charCode values
//4. styling

document.addEventListener('keypress', function(event) {
    const outputCode = document.querySelector('.code');
        outputCode.textContent = event.code;

    const outputKey = document.querySelector('.key');
        outputKey.textContent = event.key;

    const outputCharCode = document.querySelector('.char-code');
        outputCharCode.textContent = event.charCode;
});

//event listener added to document object to listen for keypress event.
//when a key is pressed event handler function is triggered,
//values of event.code, event.key and event.charCode are extracted 
//and displayed in the corresonding span elements in the div.