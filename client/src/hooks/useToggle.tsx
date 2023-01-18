import {useState} from "react";

function useToggle(defaultStatus = false) {
  const [toggle, setToggle] = useState(defaultStatus);

  function toggleShow() {
    setToggle(!toggle);
  }

  return {toggle, setToggle, toggleShow}
}

export {useToggle}