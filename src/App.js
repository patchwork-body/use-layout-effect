import React, { useRef, useEffect, useLayoutEffect, useState } from "react";

const sleep = (time) => {
  const start = Date.now();
  let now = start;

  while (now < start + time) {
    now = Date.now();
  }
};

const Flickering = () => {
  const elRef = useRef();
  const [state, setState] = useState(0);

  useEffect(() => {
    sleep(1000);
    console.log("async");
    elRef.current.textContent = "999";
  }, [state]);

  return (
    <div onClick={() => setState(Math.random())} className="box" ref={elRef}>
      {state}
    </div>
  );
};

const Static = () => {
  const elRef = useRef();
  const [state, setState] = useState(0);

  useLayoutEffect(() => {
    sleep(1000);
    console.log("sync");
    elRef.current.textContent = "999";
  }, [state]);

  return (
    <div onClick={() => setState(Math.random())} className="box" ref={elRef}>
      {state}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Flickering</h1>
      <Flickering></Flickering>
      <h1>Static</h1>
      <Static></Static>
    </div>
  );
};

export default App;
