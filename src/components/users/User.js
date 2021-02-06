import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    phone: '',
    website: ''
  })
  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`)
    setUser(result.data)
  }

  return (
    <div className='container py-4'>
      <Link className='btn btn-primary' to='/'>
            Back to Home
      </Link>
      <h1 className="display-4">
        UserId: ${id}
      </h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
    </div>
  )
}
export default User
