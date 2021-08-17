import { Switch, Route, Redirect } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";


import { AnimatedRouter } from '../core/animated-routes';

import Main from "./main/Main";
import Login from "./auth/pages/Login";

const Routes = () => {

    const { isAuthorized } = useSelector(
        ({ auth }: any) => ({
            isAuthorized: auth.user != null,
        }),
        shallowEqual
    );

    return (

        <Switch>

            <Route path="/auth/login">
                <AnimatedRouter key={1}><Login /></AnimatedRouter>
            </Route>
            <Route path="/">
                <AnimatedRouter key={2}><Main /></AnimatedRouter>
            </Route>
            <Route path="/logout" />
            <Route path="/error" />

            {
                !isAuthorized ? (
                    <Redirect to="/auth/login" />
                ) : (
                    <AnimatedRouter key={2}><Main /></AnimatedRouter>
                )
            }

        </Switch>
    )
}

export default Routes;