const { default: React } = require("react");
const { useState } = require("react");
const { default: Item } = require("./Item");

function ItemsList({ items, OnDeleteItem, OnPackedItem, OnClearList }) {
  const [sortBy, setSortBy] = useState("Default");
  let sortedItems;
  if (sortBy === "Default") {
    sortedItems = items;
  }
  if (sortBy === "Description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "Packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            data={item}
            key={item.id}
            OnDelete={OnDeleteItem}
            OnPacked={OnPackedItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(() => e.target.value)}
        >
          <option value="Default">Sort By Time You Added</option>
          <option value="Description">Sort By Description ASC</option>
          <option value="Packed">Sort By Packed Items</option>
        </select>
        <button onClick={() => OnClearList()}>Clear List</button>
      </div>
    </div>
  );
}
export default ItemsList;
