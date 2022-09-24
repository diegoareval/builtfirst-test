import { useEffect, useRef } from "react";

// hooks: cuando da click fuera del elemento
const useOnClickOutside = ({ callBack }) => {
  const ref = useRef();

  useEffect(() => {
    const listener = ({ target }) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      callBack();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callBack]);

  return {
    ref,
  };
};

export default useOnClickOutside;
