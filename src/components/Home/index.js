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
                <h2> Software Engineer | HCI </h2>

                <br/>
                <p>
                    Thanks for visiting my website! I am a new graduate with a <br></br>broad background
                    in all types of software engineering. Feel <br></br>free to checkout my story, view 
                    my projects, or get in touch <br></br>with me.
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