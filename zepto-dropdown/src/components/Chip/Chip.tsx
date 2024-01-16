import React,{MouseEvent} from "react";
import { IoMdClose } from "react-icons/io";
import Avatar from "../Avatar";
import { IDropdownData } from "../Dropdown";

interface IChip {
  data: IDropdownData;
  onRemove: (e:MouseEvent<HTMLButtonElement>) => void;
  highlighted?:boolean
}

const Chip = ({ data, onRemove,highlighted=false }: IChip) => {
  return (
    <div className={`flex justify-center items-center gap-x-2 p-1  ${highlighted ?"border border-blue-700" :" border border-gray-300 "} gap-1 text-black rounded-full px-2 bg-gray-100 max-h-7`} style={{
      boxShadow:highlighted?"0px 0px 1px 1px blue":""
    }}>
      <div className="flex justify-start items-center gap-x-1">
        <Avatar name={data.label}/>
        <p className="text-sm">{data.label}</p>
      </div>
      <button className="flex justify-center items-center bg-none border-none cursor-pointer p-0" onClick={onRemove}>
        <IoMdClose />
      </button>
    </div>
  );
};

export default Chip;
