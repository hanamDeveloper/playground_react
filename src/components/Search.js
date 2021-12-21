import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
width: 25rem;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 1rem 2rem;
    border: 1px solid black;
  }
`;

const StyleInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0;
  margin: 0;
  position: relative;
  box-sizing: border-box;
`;

const DataLists = styled.div`
  ${({ visiable }) => {
      return {
          display: visiable === false && "none"
      }
  }}
  width: 100%;
  height: 17rem;
  overflow-y: scroll;
  position: "absolute";
  top: 0;
`;

const Search = ({ datas, input, onChange }) => {
    const [ visiable, setVisiable ] = useState(false);

  return (
    <Container>
      <StyleInput onClick={() => setVisiable(!visiable)} value={input} onChange={onChange} />
      <DataLists visiable={visiable}>
        <ul>
          {datas.map((data, index) => (
            <li key={`${data}_${index}`}>{data}</li>
          ))}
        </ul>
      </DataLists>
    </Container>
  );
};

export default Search;
