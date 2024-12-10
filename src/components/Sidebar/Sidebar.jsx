import React from 'react'
import { FiBookmark } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { FaWindowMaximize } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";

const Sidebar = () => {
    return (
        <div className='  rounded-[10px] w-[50px] mt-5 h-[250px] bg-[#171D2F] ' >
            <div>
                <TfiVideoClapper/>
            </div>
            <div className='m-auto'>
                <div><MdWindow/></div>
                <div><FaWindowMaximize/></div>
                <div><FaVideo/></div>
                <div><FiBookmark/></div>
            </div>
        </div>
    )
}

export default Sidebar
