const input = document.querySelector('input');

const handleInputBlur = () => {
    input.className = input.value.length === 6 ? 'invalid' : 'valid';
};

input.addEventListener('blur', handleInputBlur);
