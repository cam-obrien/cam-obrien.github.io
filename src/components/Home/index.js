import './index.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="container home-page">
            <div className ="text-zone">
                <h1>Hi, <br/> I'm
                Cameron!
                <br/>
                </h1>
                <h2> Software Engineer | AWS Certified Solutions Architect Associate</h2>

                <br/>
                <p>
                    Thanks for visiting my website! I am an Oregon State University graduate with full stack <br/>
                    experience in a variety of frameworks. I am currently seeking a position in cloud software <br/>
                    engineering or architecture to further advance my skill set. Feel free to checkout my story,<br/>
                    view my projects or get in touch with me.
                </p>
                <br/>
                <br></br>


                <Link to="/about" className='flat-button'>About Me</Link>
                <Link to="/projects" className='flat-button'>Projects</Link>
                <Link to="/contact" className='flat-button'>Contact Me</Link>

            </div>

        </div>
    )
}

export default Home