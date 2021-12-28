import { useCallback, useEffect, useRef, useState } from "react";
import "../App.css";

function InfiniteScroll() {
  const fullContent = useRef();
  const childContent = useRef();

  const [datas, setDatas] = useState([]);
  const [scrollOptions, setScrollOptions] = useState({
    childLength: 30,
    fullHeight: 0,
  });

  useEffect(() => {
    setDatas(initialDatas.slice(0, scrollOptions.childLength));
  }, [scrollOptions.childLength]);
  const initialDatas = require("../json/infiniteScroll.json");
  
  const onScroll = useCallback(
    (e) => {
      const scrollAreaHeight = fullContent.current.clientHeight;
      const myScroll = e.target.scrollTop + scrollAreaHeight;
      const childHeight = childContent.current.clientHeight;
      scrollOptions.fullHeight = e.nativeEvent.target.scrollHeight;

      const showMoreData = () => {
          setScrollOptions({ ...scrollOptions,
          childLength : scrollOptions.childLength + 30,
          fullHeight : childHeight * scrollOptions.childLength
        })
      }

      myScroll === scrollOptions.fullHeight && showMoreData();
    }, [scrollOptions, setScrollOptions]
  )

  return (
    <div className="scroll-container" onScroll={onScroll} ref={fullContent}>
      {datas?.map((data, index) => (
        <div key={index} className="content-contaienr" ref={childContent}>
          {data.title}
        </div>
      ))}
    </div>
  );
}

export default InfiniteScroll;