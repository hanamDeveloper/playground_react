import { useEffect, useRef } from "react";
import "../App.css";

function InfiniteScroll({ datas, scrollOptions, setDatas, initialDatas, setScrollOptions }) {
  const fullContent = useRef();
  const childContent = useRef();
  
  const OnScroll = 
    (e) => {
      const scrollAreaHeight = fullContent.current.clientHeight;
      const myScroll = e.target.scrollTop + scrollAreaHeight;
      const childHeight = childContent.current.clientHeight;
      scrollOptions.fullHeight = e.nativeEvent.target.scrollHeight;

      if (myScroll === scrollOptions.fullHeight) {
        setScrollOptions({ ...scrollOptions,
          childLength : scrollOptions.childLength + 30,
         fullHeight : scrollOptions.fullHeight = childHeight * scrollOptions.childLength
        })
      }
    }

  useEffect(() => {
    setDatas(datas.slice(0, scrollOptions.childLength));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollOptions.childLength, scrollOptions.fullHeight]);

  return (
    <div className="scroll-container" onScroll={OnScroll} ref={fullContent}>
      {datas?.map((data, index) => (
        <div key={index} className="content-contaienr" ref={childContent}>
          {data.title}
        </div>
      ))}
    </div>
  );
}

export default InfiniteScroll;
