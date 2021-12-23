import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import testImage from '../images/test_Image.png'

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Target = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background: red;
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform .5s ease-out;

    ${({ isScale }) => isScale && css`
        transform: scale(1.2);
    `}    
`



const ZoomImage = () => {
    const [ scale, setScale ] = useState(false);

    return (
        <Container>
            <Target>
                <Image src={testImage} isScale={scale} onMouseLeave={() => setScale(false)} onMouseMove={() => setScale(true)}/>
            </Target>
        </Container>
    )   
}

export default ZoomImage