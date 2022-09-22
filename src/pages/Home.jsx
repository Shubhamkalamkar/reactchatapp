import React from 'react'
import { Chat } from '../components/Chat'
import { Sidebar } from '../components/Sidebar'
import { Login } from './Login'
import { Register } from './Register'
import './css/Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
