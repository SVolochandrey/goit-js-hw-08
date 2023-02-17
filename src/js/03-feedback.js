import throttle  from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('input', throttle(onTextInput, 500));
formEl.addEventListener('submit', onFormSubmit);

valueSave();

function onTextInput(event){
formData[event.target.name] = event.target.value;
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
event.preventDefault();

console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
event.currentTarget.reset();
localStorage.removeItem(LOCALSTORAGE_KEY);
}

function valueSave(event){
const inputValue = localStorage.getItem(LOCALSTORAGE_KEY);

if(inputValue){
const data = JSON.parse(inputValue);
inputEl.value = data.email || '';
textareaEl.value = data.message || '';
}
}
