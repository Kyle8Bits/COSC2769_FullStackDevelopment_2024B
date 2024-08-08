import React from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Header from '../components/Header'

function Home() {
  return (
    <>
        <Header/>
      <h1>This is home page</h1>
      <BackButton/>
    </>
  )
}

export default Home
