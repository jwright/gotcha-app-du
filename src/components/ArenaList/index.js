import React from "react";

import ArenaCard from "../ArenaCard";

const ArenaList = ({ arenas }) => (
  <React.Fragment>
    {arenas.map((arena) => (
      <ArenaCard key={arena.id} arena={arena} />
    ))}
  </React.Fragment>
);

export default ArenaList;
