import React from "react";

import { Footer } from "./components/footer";
import { NamePicker } from "./components/name-picker";
import { ResetSearch } from "./components/reset-search";
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";

function App() {
  return (
    <>
      <Search />
      <NamesContainer />
      <ResetSearch />
      <Footer />
    </>
  );
}

function NamesContainer() {
  return (
    <main>
      <ShortList />
      <NamePicker />
    </main>
  );
}

export default App;
