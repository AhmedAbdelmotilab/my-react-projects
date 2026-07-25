import IUser from "./IUser";

interface IFormAddProps {
  onAddFriend: () => void;
  addNewFriend: (friend: IUser) => void;
}
export default IFormAddProps;
