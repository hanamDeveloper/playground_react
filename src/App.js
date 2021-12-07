import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);
  const [fullHeightN, setFullHeightN] = useState(0);
  const [childLength, setChildLength] = useState(30);
  const fullContent = useRef();
  const childContent = useRef();
  const initialDatas = require("./json/infiniteScroll.json");

  useEffect(() => {
    setDatas(initialDatas.slice(0, childLength));
  }, []);

  function OnScroll(e) {
    const scrollAreaHeight = fullContent.current.clientHeight;
    const myScroll = e.target.scrollTop + scrollAreaHeight;
    const childHeight = childContent.current.clientHeight;

    if (myScroll > fullHeightN) {
      setChildLength((prevState) => prevState + 30);
      setFullHeightN(childHeight * childLength);
      setDatas(initialDatas.slice(0, childLength));
    }
  }

  return (
    <div className="container">
      <div className="scroll-container" onScroll={OnScroll} ref={fullContent}>
        {datas?.map((data, index) => (
          <div key={index} className="content-contaienr" ref={childContent}>
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
