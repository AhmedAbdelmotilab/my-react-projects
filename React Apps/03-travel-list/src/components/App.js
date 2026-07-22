import React, { useState } from "react";
import Form from "./Form";
import ItemsList from "./Items";
import Logo from "./Logo";
import Stats from "./Stats";

function App() {
  const [list, setList] = useState([]);
  function handelAddItems(item) {
    setList((list) => [...list, item]);
  }
  function handelDeleteItem(id) {
    setList((list) => list.filter((item) => item.id !== id));
  }
  function togglePackedItem(id) {
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function handelClearList() {
    const confirmed = window.confirm("Do You Want To Clear Your List");
    if (confirmed) {
      setList([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form OnAddItem={handelAddItems} />
      <ItemsList
        items={list}
        OnDeleteItem={handelDeleteItem}
        OnPackedItem={togglePackedItem}
        OnClearList={handelClearList}
      />
      <Stats items={list} />
    </div>
  );
}
export default App;
