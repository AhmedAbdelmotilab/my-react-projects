import IUser from "./IUser";

interface ISplitTheBillProps {
  selectedOne: IUser | null;
  handelSplitBill: (value: number) => void;
}
export default ISplitTheBillProps;
