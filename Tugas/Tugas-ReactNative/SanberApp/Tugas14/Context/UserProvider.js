import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export default function UserProvider({children}) {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isSigned,setIsSigned] = useState(false);
  
  return (
    <UserContext.Provider value={{email,setEmail,password,setPassword,isSigned,setIsSigned}}>
      {children}
    </UserContext.Provider>
  )
}