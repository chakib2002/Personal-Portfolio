import React from 'react';
import SkillCard from './SkillCard';

const Section = () => {
    return (
        <>
            <div className='space-y-16  md:space-y-0 bg-[#000718] md:grid grid-flow-col md:justify-items-center mx-5 rounded-3xl py-20'>
                <SkillCard title="Frontend development" image="/frontendDev.png"/>
                <SkillCard title="Backend development" image="/backendDev.png"/>
                <SkillCard title="Database design" image="/databaseStorage.png"/>
                <SkillCard title="Cloud & Dev Ops" image="/cloudDevOps.png"/>
                <SkillCard title="UI/UX" image="/ui-ux.png"/>
            </div>
            <div className='my-20 mx-5 space-y-10 md:space-y-0 md:flex md:justify-evenly '>
                <h1 className='mx-3 text-center text-sm text-gray-300 md:text-left md:self-end md:mb-9 lg:w-[750px]'>Having good communication skills can lead to better collaboration and team cohesiveness. Being self-aware of one's strengths and weaknesses can improve one's accountability skills. And the result is a well-rounded developer with strong potential.</h1>
                <SkillCard title="Soft Skills" image="/softSkills.png" bg={true}/>
            </div>
        </>
    );
}

export default Section;
