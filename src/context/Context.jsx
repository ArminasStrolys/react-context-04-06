import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [posts, setPosts] = useState([
        {
header: 'Stocks going down',
title: 'Regarding the war created by Russia, most of stock trading is going down fast...'
    },
        {
header: 'Tractor',
title: 'Farmers steal yet another tank...'
    }
])

    const addPost = (data) => {
        setPosts((val)=>{
            return [data, ...val]
        })
    }

    return(
        <AppContext.Provider value={{
            posts,
            addPost,
        }}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}