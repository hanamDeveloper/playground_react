import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { fontSizeLabelState, fontSizeState } from '../../store/recoil'

const FontButton = () => {
    const [ fontSize, setFontSize ] = useRecoilState(fontSizeState);
    const  fontSizeLabel  = useRecoilValue(fontSizeLabelState)

    return(
        <>
        <span>{fontSizeLabel}</span>
        <button 
            onClick={() => setFontSize((size) => size + 1)}
            style={{ fontSize }}>
            Click to Enlargc
        </button>
        </>
    )
}

export default FontButton