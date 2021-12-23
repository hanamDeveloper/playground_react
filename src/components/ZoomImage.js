import React, { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";
import testImage from "../images/test_Image.png";

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Target = styled.div`
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  margin: 0 auto;
  border: 1px solid black;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: transform 0.5s ease-out;
  overflow: hidden;

  ${({ isScale, origin }) =>
    isScale &&
    css`
      transform: scale(1);
      transform-origin: ${origin};
    `}
`;

const ImageZoom = styled.div`
  position: absolute;
  ${({ width, height }) =>
    css`
      width: ${width}px;
      height: ${height}px;
    `}
  margin-top: 30px;
  top: 0%;
  display: inline-block;
  transition: transform 0.5s ease-out;
  background-image: url(${testImage});
`;

const Cursor = styled.div`
  position: absolute;
  background: white;
  opacity: 0.3;
  ${({ cursor, cursorSize, width, height }) =>
    cursor &&
    css`
      width: ${width / cursorSize}px;
      height: ${height / cursorSize}px;
      left: calc(${cursor.cursorX}px - ${width / cursorSize / 2}px);
      top: calc(${cursor.cursorY}px - ${height / cursorSize / 2}px);
    `}
  z-index: 999;
`;

const ZoomImage = ({ zoomRate, width, height }) => {
  const [cursor, setCursor] = useState({
    cursorX: 0,
    cursorY: 0,
  });
  const imageRef = useRef();
  const imageZoomRef = useRef();
  const cursorRef = useRef();

  const onMouseMove = useCallback((e, zoomRate) => {
    imageZoomRef.current.style.backgroundSize = `${
      imageRef.current.offsetWidth * zoomRate
    }px ${imageRef.current.offsetHeight * zoomRate}px`;

    const rect = e.target.getBoundingClientRect();

    const getCursorPos = (e) => {
      let x = 0,
        y = 0;
      x = e.pageX - rect.left;
      y = e.pageY - rect.top;
      x = x - window.scrollX;
      y = y - window.scrollY;

      return { x, y };
    };

    const pos = getCursorPos(e);

    let x = pos.x - cursorRef.current.offsetWidth / 2;
    let y = pos.y - cursorRef.current.offsetHeight / 2;

    imageZoomRef.current.style.backgroundPosition = `-${x * zoomRate}px -${
      y * zoomRate
    }px`;

    setCursor({
      cursorX: e.pageX,
      cursorY: e.pageY,
    });
  }, []);

  return (
    <Container>
      <Target>
        <Cursor width={width} height={height} ref={cursorRef} cursor={cursor} cursorSize={zoomRate} />
        <Image
          ref={imageRef}
          src={testImage}
          onMouseMove={(e) => onMouseMove(e, zoomRate)}
        />
      </Target>
      <ImageZoom ref={imageZoomRef} width={width} height={height} />
    </Container>
  );
};

export default ZoomImage;
