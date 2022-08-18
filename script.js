'use script';

const css_theme = document.querySelector('#theme');
const number_1 = document.querySelector('#number_1');
const number_2 = document.querySelector('#number_2');
const selector = document.querySelector('#selector');
const output_result = document.querySelector('#result');

const change_theme = function(theme) {
    localStorage.setItem('theme', theme);
    css_theme.setAttribute('href', theme);
}

change_theme(localStorage.getItem('theme') || 'default.css');

const calculator = function(number__1, number__2) {
    number__1 = parseFloat(number_1.value);
    number__2 = parseFloat(number_2.value);
    const selector_input = selector.value;
    let calculo;

    switch(selector_input) {
        case '+' :
            calculo = (number__1 + number__2);
            output_result.innerHTML = `O resultado é ${calculo}`;
            number_1.value = '';
            number_2.value = '';
        break;
        case '-' :
            calculo = (number__1 - number__2);
            output_result.innerHTML = `O resultado é ${calculo}`;
            number_1.value = '';
            number_2.value = '';
        break;
        case '*' :
            calculo = (number__1 * number__2);
            output_result.innerHTML = `O resultado é ${calculo}`;
            number_1.value = '';
            number_2.value = '';
        break;
        case '/' :
            calculo = Math.round((number__1 / number__2));

            if (Number.isNaN(calculo)) {
                output_result.innerHTML = 'Insira um número divisível';
            } else {
                output_result.innerHTML = `O resultado é ${calculo}`;
            }

            number_1.value = '';
            number_2.value = '';
    }

};