import { useState } from "react";
import ISplitTheBillProps from "../interfaces/ISplitTheBillProps";
import ButtonComponent from "./Button";

function SplitTheBill({ selectedOne, handelSplitBill }: ISplitTheBillProps) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = Number(bill) - Number(paidByUser);
  function handelSubmit(e: any) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    handelSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByFriend);
  }
  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>Split The Bill With {selectedOne?.name}</h2>
      <label>💰 Total Bill:</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
      <label>😁 Your Expenses:</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > Number(bill) ? paidByUser : e.target.value,
          )
        }
      ></input>
      <label>💁 {selectedOne?.name} Expenses:</label>
      <input type="number" value={paidByFriend} disabled></input>
      <label>💁 Who Is Paying The Bill:</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(() => e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedOne?.name}</option>
      </select>
      <ButtonComponent>Split Bill</ButtonComponent>
    </form>
  );
}
export default SplitTheBill;
