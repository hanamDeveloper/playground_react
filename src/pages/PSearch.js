import React, { useState } from 'react'
import Search from '../components/Search';

const PSearch = () => {
    const initialDatas = require("../json/SearchDatas.json");
    const [ input, setInput ] = useState('');
    const [ datas, setDatas ] = useState(initialDatas);

    const onChange = (e) => {
        const searchWords = (datas, inputWord) => {
            return datas.filter((word) => !word.search(inputWord));
        };
        setInput(e.target.value);
        setDatas(searchWords(initialDatas, e.target.value))
    }

    return (
        <Search datas={datas} input={input} onChange={onChange}/>
    )
}

export default PSearch