import React, { useEffect, useState, useRef } from "react";

const TextInput = ({
  placeholder,
  value,
  disabled,
  activeBorderColor,
  beforeText,
}) => {
  const [activeText, setActiveText] = useState(false);
  const [activePlaceholder, setActivePlaceholder] = useState(false);
  const [inputvalue, setinputvalue] = useState("");
  const ref = useRef();
  const inputRef = useRef();

  const toggleActive = () => {
    if (!disabled) {
      setActiveText(true);
      ref.current.style.borderColor = `${activeBorderColor || "#002262"}`;
      setActivePlaceholder(true);
      if (!activeText) {
        inputRef.current.focus();
      }
    }
    inputRef.current.focus();
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      console.log(activeText, "checking", e.target);

      if (activeText && ref.current && !ref.current.contains(e.target)) {
        setActiveText(false);
        ref.current.style.borderColor = "#f2f4f9";
        if (inputvalue === "") {
          setActivePlaceholder(false);
        }
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [activeText, inputvalue]);

  useEffect(() => {
    if (!value || value === "") {
      setActivePlaceholder(false);
    } else {
      setActivePlaceholder(true);
    }
  }, [value]);
  return (
    <div
      className={`text-input flex align-center ${activeText && "active"} ${
        disabled && "disabled"
      }`}
      onClick={toggleActive}
      ref={ref}
    >
      <p className="before-text text-light text-small">{beforeText}</p>
      {/* <p className={`placeholder ${activePlaceholder && "active"}`}>
        {placeholder}
      </p> */}
      <input
        type="text"
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setinputvalue(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;
