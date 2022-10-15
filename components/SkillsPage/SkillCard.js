import Image from 'next/image';
import React from 'react';

const SkillCard = ({image, title, bg}) => {
    return (
        <div className={`text-center font-semibold lg:hover:font-black text-white cursor-pointer 
        ${bg&& 'md:bg-slate-800 md:py-4 md:px-2 md:rounded-3xl' }`} >
            <Image src={image} alt="" width='100' height='100' layout="fixed" className=''/>
            <h1 className='mt-1 md:w-32 text-center'>{title}</h1>
        </div>
    );
}

export default SkillCard;
