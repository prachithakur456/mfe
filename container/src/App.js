import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

export default () => {
    const [signedIn, setSignedIn] = useState(false);
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
                    <Suspense fallback={<div>Loading....</div>}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setSignedIn(true)}/>
                            </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}