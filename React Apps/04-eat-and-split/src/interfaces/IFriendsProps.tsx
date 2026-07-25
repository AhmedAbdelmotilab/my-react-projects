import IUser from "./IUser";

interface IFriendsProps {
  friends: IUser[];
  setSelectedFriend: (friend: IUser) => void;
  selectedFriend: IUser | null;
  bill: number;
}
export default IFriendsProps;
