import React from 'react'
import { useSelector } from 'react-redux';
import {selectUserName} from '../Store/User/userSlice'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  
    const userName = useSelector(selectUserName);
    if(!userName){
        return <Navigate to={"/"}/>
    }
    return children
}

export default PrivateRoute