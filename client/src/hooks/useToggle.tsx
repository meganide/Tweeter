import {useState} from "react";

function useToggle(defaultStatus = false) {
  const [toggle, setToggle] = useState(defaultStatus);

  function toggleShow() {
    setToggle(prev => !prev);
  }

  return {toggle, setToggle, toggleShow}
}

export {useToggle}