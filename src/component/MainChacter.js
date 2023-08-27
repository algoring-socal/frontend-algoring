import React, { useState } from 'react'

const MainChacter = ({ bgImg, chrImg }) => {


  return (
    <div>
      MAIN CHARACTER
      <div className="main-chr-bg">
      {bgImg}
        {/* <img src={bgImg} /> */}
      </div>
      <div className="main-chr-img">
      {chrImg}
        {/* <img src={chrImg} /> */}
      </div>
  </div>
  )
}

export default MainChacter