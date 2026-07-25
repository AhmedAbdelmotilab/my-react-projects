import IFriendsProps from "../interfaces/IFriendsProps";
import Friend from "./Friend";

function FriendsList({
  friends,
  setSelectedFriend,
  selectedFriend,
  bill,
}: IFriendsProps) {
  return (
    <ul>
      {friends.map((f) => (
        <Friend
          friend={f}
          key={f.id}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
          bill={bill}
        />
      ))}
    </ul>
  );
}
export default FriendsList;
