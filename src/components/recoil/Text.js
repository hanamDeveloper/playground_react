import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { fontSizeLabelState, fontSizeState } from '../../store/recoil';

const Text = () => {
    const [ fontSize ] = useRecoilState(fontSizeState);
  

    
    return (

        <p style={{ fontSize }}>This text will increase in size too.</p>
        
        

    )
}

export default Text