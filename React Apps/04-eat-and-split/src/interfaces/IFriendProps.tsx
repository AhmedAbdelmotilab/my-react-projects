import IUser from "./IUser";

interface IFriendProps {
  friend: IUser;
  setSelectedFriend: (friend: IUser) => void;
  selectedFriend: IUser | null;
  bill: number;
}
export default IFriendProps;
