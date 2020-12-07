import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({isAuth, component: Component, redirectTo, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>{
            if(isAuth){
                return <Component />
            }else{
                return <Redirect to={{pathname: `${redirectTo}`, state: {from: props.location} }} />
            }
        }}/>
    );
}

export default PrivateRoute;
