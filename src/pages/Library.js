import React, { useState, useEffect } from 'react'
import Character from '../component/Character';

const Library = () => {
  const [ chrList, setChrList ] = useState([]);
  const [ chrCnt, setChrCnt ] = useState(0);
  const TOTAL = 12;

  const testChrList = [{id: 1, name: 'fish', image: '', level: 3}, 
                      {id: 2, name: 'duck', image: '', level: 3}, 
                      {id: 3, name: 'penguin', image: '', level: 1}];

  useEffect(() => {
    setChrList(testChrList);
    chrList && setChrCnt(chrList.length);
  }, []);

  return (
    <div className='main-container'>
      <div className='haed'>Title</div>
      <div className='middle'>
        <div>goto main</div>
        <div>
        { setChrCnt && setChrList.map((chr) => {
              return (
                <Character
                  key={chr.id}
                  name={chr.name}
                  image={chr.image}
                  level={chr.level}
                  id={chr.id}
                  levelClassNm='level-icon-show'
                />
              );
            })
          }
        </div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}

export default Library