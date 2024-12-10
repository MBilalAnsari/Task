import React from 'react'
import { FiBookmark } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { FaWindowMaximize } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";

const Sidebar = () => {
    return (
        <div className="rounded-[15px] w-[10%] max-w-[60px] mt-5 max-h-[90vh] h-auto bg-[#171D2F]">
            <div className="flex justify-center">
                <div className="flex flex-col items-center">
                    <div className="mb-10 mt-3 text-red-500 text-2xl">
                        <TfiVideoClapper />
                    </div>
                    <div className="flex flex-col gap-6 items-center">
                        <div className="text-2xl"><MdWindow /></div>
                        <div className="text-2xl"><FaWindowMaximize /></div>
                        <div className="text-2xl"><FaVideo /></div>
                        <div className="text-2xl"><FiBookmark /></div>
                        <div className="text-2xl">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZ75KKy6w0Rw_ExGPMO1ZcccgpjXaK-xKgQ&s"
                                className="rounded-full w-12 mt-28"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
