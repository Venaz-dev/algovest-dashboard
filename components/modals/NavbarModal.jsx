// import React, {useState} from 'react';
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Icon from "../common/Icons";

const NavbarModalLabel = ({ page_name, icon_name, size, path, color }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Link href={path}>
        <a
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="nav-modal-label">
            <p className="font-regular">{page_name}</p>
            <Icon name={icon_name} color={hover ? "#222222" : "#808080"} />
          </div>
        </a>
      </Link>
    </>
  );
};

const NavbarModalComp = ({ toggleModal, setToggleModal }) => {
  const ref = useRef();

  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (toggleModal && ref.current && !ref.current.contains(e.target)) {
        setToggleModal(!toggleModal);
      }
    };
    document.addEventListener("mousedown", checkOutsideClick);
    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [toggleModal]);

  return (
    <div className="navbar_modal_container" ref={ref}>
      <NavbarModalLabel
        page_name="About"
        icon_name="outlink"
        size={20}
        path="/about"
      />
      <NavbarModalLabel
        page_name="Docs"
        icon_name="outlink"
        size={20}
        path="/docs"
      />
      <NavbarModalLabel
        page_name="Telegram"
        icon_name="outlink"
        size={20}
        path="/telegram"
      />
    </div>
  );
};

export default NavbarModalComp;
