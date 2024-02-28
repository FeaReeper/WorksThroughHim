import {createContext, useEffect, useState} from 'react'

export const userContext = createContext({
  currentUser: {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    verse: '',
    image: '',
    church: '',
    businessName: '',
    trade: '',
    description: ''
  },
  setCurrentUser: () => {}
})

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    verse: '',
    image: '',
    church: '',
    businessName: '',
    trade: '',
    description: ''
  });

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      // console.log(localStorage.getItem('currentUser'))
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
    }
  },['currentUser'])

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser}}>
      {props.children}
    </userContext.Provider>
  )
}