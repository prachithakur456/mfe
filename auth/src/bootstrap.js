import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn } = {}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if(onNavigate){
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    )
    return {
        onParentNavigate: ({pathname}) => {
            history.push(pathname);
        }
    }
}

const el = document.querySelector('#_auth-dev-root');
if (el) {
    mount(el, {defaultHistory: createBrowserHistory()});
}

console.log("Hi, from auth");

export { mount }