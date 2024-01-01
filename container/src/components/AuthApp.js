import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthIndex';
import { useHistory } from 'react-router-dom';

export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        console.log("Hii")
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            onSignIn: () => {
                onSignIn()
            }
        });
        history.listen(onParentNavigate);
    }, [])

    return <div ref={ref}></div>
}