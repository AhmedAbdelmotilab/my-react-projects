import { useState } from "react";
import IFormAddProps from "../interfaces/IFormAddProps";
import ButtonComponent from "./Button";

function FormAddFriend({ addNewFriend, onAddFriend }: IFormAddProps) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handelSubmit(e: any) {
    const id = Date.now();
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      id: id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    console.log(newFriend);
    addNewFriend(newFriend);
    onAddFriend();
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handelSubmit}>
      <h2 style={{ textAlign: "center" }}>Add New Friend</h2>
      <label>🧑‍💻 Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(() => e.target.value)}
      ></input>
      <label>🌆 Picture:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(() => e.target.value)}
      ></input>
      <ButtonComponent>Add</ButtonComponent>
    </form>
  );
}
export default FormAddFriend;
