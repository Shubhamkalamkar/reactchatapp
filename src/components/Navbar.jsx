import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src="https://tse1.mm.bing.net/th?id=OIP.0675w859pNovRhCW1M0aJAAAAA&pid=Api&P=0" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
