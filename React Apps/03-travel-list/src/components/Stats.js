import React from "react";

function Stats({ items }) {
  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPackedItems * 100) / numOfItems);

  return (
    <footer className="stats">
      {numOfItems > 0 ? (
        <em>
          You Have {numOfItems} In Your List And You Packed {numOfPackedItems}{" "}
          So That's {percentage}%
        </em>
      ) : (
        <em>You Have To Add Items First</em>
      )}
    </footer>
  );
}
export default Stats;
