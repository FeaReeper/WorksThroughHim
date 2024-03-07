import {createContext, useEffect, useState} from 'react'

export const userContext = createContext({
  currentUser: {
    _id: '',
    name: '',
    email: '',
    favVerse: '',
    image: '',
    church: '',
    businessName: '',
    trade: '',
    description: '',
    lookingForWork: null
  },
  setCurrentUser: () => {}
})

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
    favVerse: '',
    image: '',
    church: '',
    businessName: '',
    trade: '',
    description: '',
    lookingForWork: null
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