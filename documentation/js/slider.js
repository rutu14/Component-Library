const range = document.getElementById('range-input');
const rangeValue = document.getElementById('range-label');

const setValue = ()=>{
    const newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) )
    const newPosition = 10 - (newValue * 0.2);
    rangeValue.innerHTML = `<span>${range.value}</span>`;
    rangeValue.style.left = `calc(${newValue}% + (${newPosition}px))`;
};

document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);