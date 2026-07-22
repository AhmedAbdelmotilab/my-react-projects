import React from "react";

function Item({ data, OnDelete, OnPacked }) {
  return (
    <li>
      <input type="checkbox" onChange={() => OnPacked(data.id)}></input>
      <span style={data.packed ? { textDecoration: "line-through" } : {}}>
        {data.quantity} {data.description}
      </span>
      <button onClick={() => OnDelete(data.id)}>❌</button>
    </li>
  );
}
export default Item;
