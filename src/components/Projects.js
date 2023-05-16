
import github from '../images/github.png';
import link from '../images/link.png';

function Projects() {
  
    return (
        <div>
            <h2>My projects</h2>
            <article>
                <img src="" alt="" />
                <p></p>
                <div>
                    <article>
                        <img src="" alt="" />
                        <h4>Harry Potter</h4>
                        <p></p>
                        <div>
                            <span><a href="https://github.com/patriciabog/HarryPotter"> <img src={github} alt="" /></a>
                            </span>
                            <span>
                             <a href="https://patriciabog.github.io/HarryPotter/"> <img src={link} alt="" /></a>
                            </span>
                        </div>

                    </article>

                     <article>
                    </article>

                     <article>
                    </article>

                     <article>
                    </article>

                     <article>
                    </article>

                     <article>
                    </article>
                    <span>
                        <a href="https://github.com/patriciabog">
                             <img src={github} alt="" />
                        </a>
                        
                    </span>
                </div>
            </article>
           
        </div>
    )

}
export default Projects;