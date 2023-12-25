import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
ReactDOM.render(
    <App />,
    el
)
}

const el = document.querySelector('#_marketing-dev-root');
if(el){
    mount(el);
}

console.log("Hi, from marketing");

export {mount}