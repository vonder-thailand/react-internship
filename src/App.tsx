import Home from "Home";
import { useCallback, useEffect, useMemo, useState } from "react";
// const countFunction = new Set();

function App() {
  const [homeName, setHomeName] = useState<string>("");
  const [isShowText, setIsShowText] = useState<boolean>(false);

  useEffect(() => {
    setHomeName("Is use effect" + Math.random() * 999);
  }, [isShowText]);

  const [count, setCount] = useState(0);

  // console.log("re-render parent component");

  const resetCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // const renderList = () => {
  //   console.log("render list");
  //   return Array.from(Array(100).keys()).map((key) => {
  //     return (
  //       <div style={{ padding: "5rem" }}>
  //         <h1 key={key}>{key}</h1>
  //       </div>
  //     );
  //   });
  // };

  const renderList = useMemo(() => {
    console.log("render list");
    return Array.from(Array(100).keys()).map((key) => {
      return <h3 key={key}>{key} count</h3>;
    });
  }, []);

  return (
    <div className="App">
      <Home resetCount={resetCount} />
      <input
        placeholder="enter text"
        onChange={({ target: { value } }) => setHomeName(value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count ++++
      </button>
      <h2>Count: {count}</h2>
      {/* <button onClick={() => setIsShowText((prevState) => !prevState)}>
        close
      </button> */}
      <>
        {/* <h2>Count: {count}</h2>
         */}
        {/* <button onClick={decrement}>-</button>
        <button onClick={incrementOtherCounter}>not use useCallback</button> */}
      </>
      {/* {renderList()} */}
      {renderList}
    </div>
  );
}

export default App;
