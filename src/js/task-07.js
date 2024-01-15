const input = document.querySelector('input#font-size-control');
const span = document.querySelector('span#text');

const handleInput = () => {
    span.style.fontSize = input.value + 'px';
};

input.addEventListener('input', handleInput);
