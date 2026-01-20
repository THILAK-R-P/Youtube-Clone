import React from 'react'
import './home.css'
import Sidebar from '../components/sidebar/sidebar'
const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        
      </div>
    </>
  )
}

export default Home