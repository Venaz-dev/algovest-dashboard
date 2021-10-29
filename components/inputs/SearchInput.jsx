import React, {useState} from "react";
import Icon from "../common/Icons";

const SearchInput = ({icon_name, size, value, placeholder}) => {

  const [inputvalue, setInputvalue] = useState("");

  return (
    <div
      className="input_cont flex w-100 flex align-center bord-rad-1 mr-5">
      <Icon name={icon_name} size={size} />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setinputvalue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;

