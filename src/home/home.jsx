import React from 'react'
import './home.css'
import Feed from '../components/Feed/Feed.jsx'
import Sidebar from '../components/sidebar/sidebar'
const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home