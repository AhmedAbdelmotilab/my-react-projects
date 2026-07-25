import { useState } from "react";
import IUser from "../interfaces/IUser";
import ButtonComponent from "./Button";
import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import SplitTheBill from "./SplitTheBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [isAddForm, setIsAddForm] = useState(false);
  const [list, setList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<IUser | null>(null);
  const [bill, setBill] = useState(0);
  // Handel Showing Add Form
  function handelAddFormShowing() {
    setIsAddForm((isAddForm) => !isAddForm);
    setSelectedFriend(null);
  }
  // Handel Showing Add Form After Adding New Friend
  function handelCloseForm() {
    setIsAddForm(() => false);
  }
  // Handel Add New Friend To The List
  function handelAddNewFriend(friend: IUser) {
    setList((list) => [...list, friend]);
  }
  function handelSelectedFriend(friend: IUser) {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend,
    );
    setIsAddForm(false);
  }
  function handelSplitBill(value: number) {
    console.log(value);
    setBill(value);
    setList((list) =>
      list.map((f) =>
        f.id === selectedFriend?.id ? { ...f, balance: f.balance + value } : f,
      ),
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={list}
          selectedFriend={selectedFriend}
          setSelectedFriend={handelSelectedFriend}
          bill={bill}
        />
        {isAddForm && (
          <FormAddFriend
            onAddFriend={handelCloseForm}
            addNewFriend={handelAddNewFriend}
          />
        )}
        <ButtonComponent onClick={handelAddFormShowing}>
          {isAddForm ? "Close" : "Add New Friend"}
        </ButtonComponent>
      </div>
      {selectedFriend && (
        <SplitTheBill
          selectedOne={selectedFriend}
          handelSplitBill={handelSplitBill}
        />
      )}
    </div>
  );
}
export default App;
