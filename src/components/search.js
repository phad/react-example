import React, { useEffect, useRef } from "react";

import { useAppState } from "../providers/app-state";

export function Search() {
  const { searchValue, setSearchValue } = useAppState();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <header>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a name..."
        value={searchValue}
        onChange={handleChange}
      />
    </header>
  );
}
