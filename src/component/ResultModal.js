import React from 'react'

const ResultModal = ({ onClose, resDesc, resMsg, chrImg, btnText }) => {
  return (
    <>
      <p>{resDesc}</p>
      <h1>{resMsg}</h1>
      {chrImg && <img src={chrImg} />}
      <button onClick={onClose}>{btnText}</button>
    </>
  )
}

export default ResultModal