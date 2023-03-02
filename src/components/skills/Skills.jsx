import React from 'react';
import "./skill.css";
import Photo from './Photo';
import Video from './Video';
import UiDesign from './UiDesign';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <Video />

            <Photo />

            <UiDesign />
        </div>
    </section>
  )
}

export default Skills
