import { useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext"


function Profile() {
  const {user} = useContext(UserContext) //accessing user from UserContext
  if (!user) {
    return <h2>Please login</h2>
  }
  return (
    <div className="flex flex-col items-center justify-center text-3xl  gap-5 p-5 m-3 width-1/2">
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  )
}

export default Profile