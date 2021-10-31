// import React, {useState} from 'react';
import Link from "next/link";
import Icon from '../common/Icons';

const NavbarModalLabel = ({page_name, icon_name, size, path, color }) => {
    
    return (
        <>
            <Link href={path}>
              <a>
                <div className='nav-modal-label'>
                    <p className='text-smaller'>{page_name}</p>
                    <Icon name={icon_name} size={size} color={color}/>
                </div>
              </a>
            </Link>
        </>
    )
}


const NavbarModalComp = ({page_name, }) => {
    return (
        <div className='navbar_modal_container'>
            <NavbarModalLabel page_name="About" icon_name="outlink" size={20} path='/about' color="#cec" />   
            <NavbarModalLabel page_name="Docs" icon_name="outlink" size={20} path='/docs' color="#cec" />   
            <NavbarModalLabel page_name="Telegram" icon_name="outlink" size={20} path='/telegram' color="#cec" />   
        </div>
    )
}

export default NavbarModalComp;