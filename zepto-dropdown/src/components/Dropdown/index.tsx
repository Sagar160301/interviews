import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from "react";
import Chip from "../Chip/Chip";
import { dropdownData } from "./data";
import Avatar from "../Avatar";

export interface IDropdownData {
  id: number;
  label: string;
  email: string;
}

interface IState {
  active: boolean;
  selectedItems: IDropdownData[] | [];
  filteredData: IDropdownData[];
  nonSelectedItems: IDropdownData[] | [];
  inputValue: string;
  lastSelectedOption: IDropdownData | null;
}

const Dropdown = () => {
  const [state, setState] = useState<IState>({
    active: true,
    selectedItems: [],
    filteredData: dropdownData,
    nonSelectedItems: dropdownData,
    inputValue: "",
    lastSelectedOption: null,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectOption = (option: IDropdownData) => {
    setState((pre) => ({
      ...pre,
      selectedItems: [...pre.selectedItems, option],
      filteredData: pre?.filteredData?.filter(
        (eachData) => eachData.id !== option.id
      ),
      nonSelectedItems: pre?.nonSelectedItems?.filter(
        (eachData) => eachData.id !== option.id
      ),
      lastSelectedOption: null,
    }));
  };

  const handleRemove = (option: IDropdownData) => {
    setState((pre) => ({
      ...pre,
      selectedItems: pre?.selectedItems?.filter(
        (eachOption) => eachOption?.id !== option.id
      ),
      filteredData: [...pre.filteredData, option],
      nonSelectedItems: [...pre.nonSelectedItems, option],
      lastSelectedOption: null,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLocaleLowerCase();
    setState((pre) => ({
      ...pre,
      active: true,
      inputValue: e.target.value,
      filteredData: pre?.nonSelectedItems?.filter((eachData) =>
        eachData?.label.toLocaleLowerCase().includes(inputValue)
      ),
    }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && state.lastSelectedOption !== null) {
      setState((pre) => ({ ...pre, lastSelectedOption: null }));
      handleRemove(state.selectedItems[state.selectedItems.length - 1]);
    } else if (
      e.key === "Backspace" &&
      state.active &&
      state.inputValue === ""
    ) {
      setState((pre) => ({
        ...pre,
        lastSelectedOption: pre.selectedItems[state.selectedItems.length - 1],
      }));
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setState((prev) => ({ ...prev, active: false }));
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div
      className={`w-4/5 mx-auto border-b border-b-blue-500 flex flex-wrap justify-start hover:border-blue-500 h-auto p-2 gap-1`}
      ref={dropdownRef}
    >
      {state?.selectedItems?.map((eachItem) => (
        <Chip
          data={eachItem}
          onRemove={(e) => {
            e.stopPropagation();
            handleRemove(eachItem);
          }}
          key={eachItem.id}
          highlighted={
            state?.lastSelectedOption !== null &&
            state?.lastSelectedOption?.id === eachItem?.id
          }
        />
      ))}
      <div className="relative">
        <input
          type="text"
          className="w-full border-none active:border-none outline-none   px-2 inline-block placeholder:text-xs"
          value={state.inputValue}
          onChange={handleInputChange}
          onClick={() => {
            setState((pre) => ({ ...pre, active: true }));
          }}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Add New User"
        />

        {state.active && (
          <ul
            className="absolute bg-white w-80 rounded max-h-60 overflow-y-scroll top-7"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            {state.filteredData.map((eachData) => (
              <li
                className="text-sm p-2 px-3  hover:bg-blue-100 rounded transition-all duration-300 ease-in flex items-center gap-x-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectOption(eachData);
                }}
                key={eachData.id}
              >
                <div className="w-full flex items-center gap-1 justify-between">
                  <div className="flex items-center gap-1">
                    <Avatar name={eachData.label} />
                    <p className="capitalize">{eachData?.label}</p>
                  </div>
                  <p className="text-gray-400 text-xs">{eachData.email}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
