import React from 'react';
import './about.css'
function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div>
        <img src={require('./profilepic.jpg')} alt={'profilepic.png'} className='profile-pic'></img>
        </div>
        <p>
Hi my name is Jon Amaya,
        </p>
        <p>
        I am a highly motivated junior web developer and recent graduate of a full-stack web development coding bootcamp. Combining coding proficiency with problem-solving expertise, I've demonstrated leadership in successful roles as a Head Cook and Kitchen Manager. Fluent in Portuguese with diverse experience living in Brazil, including roles as a translator and tour guide, and an adventurous journey into the heart of the Amazon. This unique background has honed adaptability, effective communication, and a deep appreciation for diverse perspectives and problem-solving in distinctive environments. Eager to contribute to a dynamic web development team, leveraging my coding skills, problem-solving abilities, and strong work ethic.
        </p>
      </div>
    </section>
  );
}
export default About;