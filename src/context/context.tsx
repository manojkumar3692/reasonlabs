import {createContext, useContext, useReducer} from 'react';
import {userReducer} from './reducer';

const User = createContext({});



const Context  = ( {children}:any ) => {
    const [userState, userDispatch]:any = useReducer(userReducer, {
        users: []
    })
    return <User.Provider value={{userState, userDispatch}} >
        {children}
    </User.Provider>
}

export const UserState = () => {
    return useContext(User);
}

export default Context;

