import React from 'react';
import Authcontext from './Authcontext';

const AuthProvide = ({children}) => {





    const Authinfo = {
        name: "akib bhai in towen",
    }


    return (
        <Authcontext value={Authinfo}>
            {children}
        </Authcontext>
    );
};

export default AuthProvide;