import React, { useState, useEffect } from 'react'
import MainPage from './MainPage';

const Title = () => {
const [ isLoading, setIsloading ] = useState(true);

useEffect(() => {
  setIsloading(false);

}, []);


  return (
    <>
      
      {isLoading ? (
        <>
          <h1>TITLE</h1>
          <img src='' />
        </>
      ) : (
        <MainPage />
      )}
    </>
  )
}

export default Title