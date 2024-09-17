import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data, reference }) {

    return (
        <motion.div drag dragConstraints={reference} className='relative h-72  max-w-xl min-w-72 rounded-[35px] shadow-[0_2px_60px_15px_rgba(0,0,0,0.7)] bg-zinc-900/90 p-7 text-white overflow-hidden'>
            <FaRegFileAlt />
            <hr className='mt-3' />
            <h1 className='mt-2 italic'>{data.title}</h1>
            <p className='mt-2 leading-tight'>
                {data.description}
            </p>
            <div className='footer absolute px-7 w-full h-11 bottom-0 left-0'>
                <div className='flex item-center justify-between'>
                    <h1>0.5mb</h1>
                    <MdDeleteOutline size={18} className='cursor-pointer' />
                </div>
            </div>
        </motion.div>

    );
}

export default Card;
