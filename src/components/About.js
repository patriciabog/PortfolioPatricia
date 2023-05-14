import React from 'react';
import photo from '../images/foto-Patri-small.jpg';

function About() {
    return (
    <div>
        <h3> Hi Everyone! </h3>
        <p>
           I'm Patricia montes de oca, Junior Full Stack developer with experience in Spain, The Netherlands and Ireland, I can bring a unique perspective and diverse skills.<br/>
            My background working in different countries and cultures has given me an adaptable and flexible mindset, which is a valuable asset in today's globalized work environment.<br/>
            My experience as a Customer Success also give me an edge as a developer, as I can have a deep understanding of how to communicate effectively with clients and stakeholders, and how to prioritize their needs and concerns. This can be particularly valuable when working on projects that involve direct communication with clients or end-users.<br/>
            Currently, I am ready to take on new challenges, learn new technologies, and improve my skills and knowledge.
        </p>
        <img src={photo} alt="" />
    </div>
)

}
export default About;