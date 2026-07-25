import IFriendProps from "../interfaces/IFriendProps";
import ButtonComponent from "./Button";

function Friend({
  friend,
  setSelectedFriend,
  selectedFriend,
  bill,
}: IFriendProps) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={`${isSelected ? "selected" : ""}`}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>
        {friend.name} {isSelected ? bill : ""}
      </h3>
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)} €
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owes You {Math.abs(friend.balance)} €
        </p>
      )}
      {friend.balance === 0 && <p>You And {friend.name} Are Even</p>}
      <ButtonComponent onClick={() => setSelectedFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </ButtonComponent>
    </li>
  );
}
export default Friend;
