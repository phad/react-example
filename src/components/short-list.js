import React from "react";

import { NameList } from "./name-list";
import { useAppState } from "../providers/app-state";
import { useNames } from "../providers/names";

// This component assumes correct props being passed.  PropTypes would help to
// verify that this is the case.
export function ShortList() {
  const names = useNames();
  const { shortList, setShortList } = useAppState();

  const shortListedNames = names.filter((entry) =>
    shortList.includes(entry.id)
  );

  const removeFromShortList = function (id) {
    setShortList(shortList.filter((entryId) => id !== entryId));
  };

  const hasNames = shortList.length > 0;
  return (
    <div className="short-list">
      <h2>{hasNames ? "Your shortlist" : "Click on a name to shortlist it"}</h2>
      {hasNames && (
        <>
          <NameList
            nameList={shortListedNames}
            onItemClick={removeFromShortList}
          />
          <hr />
        </>
      )}
    </div>
  );
}
