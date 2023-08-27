import React from 'react'

const Character = ({ img, name, level, id, levelClassNm }) => {
  return (
    <>
      <div className="thumb-nail-container">
        <img src={img} alt={name} />
      </div>
      <div className={levelClassNm}>{level}</div>
    </>
  )
}

export default Character