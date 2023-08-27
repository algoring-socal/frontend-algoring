import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import GoToButton from '../component/GoToButton'
import MainChacter from '../component/MainChacter'
import UrlModal from '../component/UrlModal';
import ResultModal from '../component/ResultModal';

const MainPage = () => {
  const [ isLoading, setIsloading ] = useState(true);
  const [ chr, setChr ] = useState();
  const [ isUpdated, setIsUpdated ] = useState(false);
  const [ showUrlModal, setShowUrlModal ] = useState(false);
  const [ showResultModal, setShowResultModal ] = useState(false);

  const testChr = {
    character: 'fish',
    level: 1,
    exp: 70,
    bgImg: 'bgImgUrl',
    chrImg: 'chrImgUrl'
  };

  useEffect(() => {
    setChr(testChr);
    // requestMainChr();
    // fetchData - get api
    //  기다리ㅡㄴ동안 - isLoading : True -> 로딩스피너
    
  }, [isUpdated]);

  async function requestMainChr() {
    const res = await fetch (
      ``
    );
    const json = await res.json();
    setChr(json[0]);
  }



  const toggleUrlModal = () => setShowUrlModal(!showUrlModal)
  const toggleResultModal = () => setShowResultModal(!showResultModal)

  return (
    <div className='main-container'>
      <div className='title'>ALGORING
      </div>
      <div className='middle'>
        <div className='progress'>
          <progress value={testChr.exp/100}></progress>{testChr.exp}/100
        </div> 
        <div className='contents'>
          <GoToButton 
            className='go-to-btn'/>
          <MainChacter 
            className='main-chr-container'
            bgImg={testChr.bgImg}
            chrImg={testChr.chrImg}
            />
        </div>
        <div className='bottom'>
          <button 
            className='start-button'
            onClick={toggleUrlModal}>
              Start
          </button>
          {showUrlModal && createPortal(
            <UrlModal 
              msg='Add a new achievement!'
              desc='After completing the Leet Code question, copy and paste the URL of the webpage.'
              onClose={() => {
                setShowUrlModal(false)
                setShowResultModal(true)
              }}
              btnText='SUBMIT' />,
              document.body)}
          {showResultModal && createPortal(
            <ResultModal 
              resDesc='+20xp'
              resMsg='EXCELLENT!'
              onClose={() => {
                setShowResultModal(false) 
                setIsUpdated(true)
              }}
              btnText='CLAIM' />,
              document.body)}
        </div>
      </div>
    </div>
  )
}

export default MainPage