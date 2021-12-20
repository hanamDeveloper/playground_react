import { useEffect, useState } from "react";
import "./App.css";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [datas, setDatas] = useState([]);
  const [ scrollOptions, setScrollOptions ] = useState( {
    childLength: 30,
    fullHeight: 0,
})
  const initialDatas = require("./json/infiniteScroll.json");

  useEffect(() => {
    setDatas(initialDatas.slice(0, scrollOptions.childLength));
  }, [scrollOptions.childLength]);
  

  return (
    <div className="container">
      <InfiniteScroll
        datas={datas}
        setDatas={setDatas}
        scrollOptions={scrollOptions}
        setScrollOptions={setScrollOptions}
        initialDatas={initialDatas}
      />
    </div>
  );
}

export default App;
