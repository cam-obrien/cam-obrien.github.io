import "./index.scss"
import useCollapse from "react-collapsed";
import { useState } from "react";
 
import DownArrow from '../../assets/images/down_arrow.png'
import UpArrow from '../../assets/images/up_arrow.png'

function Project(props) {

    const [expanded, setExpanded] = useState(false);



    const config = { 
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };

    const { getCollapseProps, getToggleProps} = useCollapse(config);

    return (
        <div className="collapsible" >
            <div className="header" {...getToggleProps()}>
                <div className="title" onClick={() => setExpanded(!expanded)}>  <h1>{props.title}</h1> <img src={expanded ? UpArrow : DownArrow} alt="Expand Arrow"></img> </div>
      
                <div className="sub-heading" onClick={() => setExpanded(!expanded)}><p id="sub-heading">{props.subheading}</p></div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                        {props.children}
                </div>
            </div>
        </div>
    )
}   


const Projects = () => {
    return (
        <div className="projects-page">
            <h1 id="page-header">Projects</h1>

                
                <Project title="Open Source Classroom Polling Software" subheading="Full Stack Web Development | Python &#38; Django">

                        <p>
                            <h3> Goals </h3>
    
                            My development team and I looked to improve the quality of life of both Oregon State students and professors
                            by creating a free alternative classroom polling service for Oregon State Students and professors. We aimed to
                            make our version of these usually subscription based services like TopHat and Learning Catalytics both as effective
                            at maintaining student interaction while allowing professors to more easily create questions for students to answer
                            in class. 

                            <h3> Development Approach</h3>

                            I was placed onto a team of six developers based on my previous experience in full stack software engineering. We decided 
                            to split our team into a front and backend team with designated communications representatives to serve as a bridge
                            between the other development team and our project partner, Evan Thatcher. I was elected communciations representative
                            of the backend team given my full stack experience and willingness to maintain strong communication with the group as a whole.
                            We decided to follow a scrum framework, splitting the overall nine months of development into three terms split by three sprints
                            each.

                            <h3> Takeaways </h3>

                            As a backend developer on this project I gained extensive experience working with Django's routing, admin, and API 
                            services. I found this experience reignited my passion for web-based development as the tools provided were so
                            powerful. The main piece of the website's functionality I was put in charge of was user authentication and sessions.
                            I applied Django's libraries and was able to get these functionalities implemented in a short period of time. Perhaps
                            one of the most valuable takeways from this project was documentation experience. This project is slotted to be taken
                            over next year by a capstone team simialr to mine and eventually released as an open source project which required us
                            to create extensive documentation on our work thus far.

                            <h3> Summation </h3>

                            After nine months of development we were able to create a web application capable of providing users with the essential 
                            operations of a service like Learning Catalytics. I am unable to provide the source code of this project publically as it
                            will be worked on further next year by another OSU capstone team.
                        </p>

                </Project>


                <Project title="Spotify Wrapped API App" subheading="Mobile Development | Kotlin &#38; Spotify API">
                    <p>
                        <h3> Goals </h3>

                        Create a mobile application that allows users to login to Spotify and show them their most listened to 
                        artists and songs. Users should be able to select a time period between one to six months along with either
                        songs or artists to view their Spotify data. Once the top ten results of the user's desired information is
                        displayed they should be able to select a result and navigate to Spotify's website to view more information in 
                        an intent.

                        <h3> Development</h3>

                        I joined a team of three other developers to create this service over a one week period. We spent the first day of
                        the project planning out the various screens of the application, researching Spotify's API including both API calls
                        and login verification, and setting various goals to reach throughout the week. We spent the next few days in two teams
                        asynchronously working on Figma designs and creating the base layer of the application's views. Once we had screen navigation
                        and finalized Figma designs we implemented the login functionality. This provided us with more of a challenge than we 
                        anticipated and forced us to implement the result API calls and other features within the last day of development.

                        <h3> Takeaways </h3>

                        Creating this application was my most API-involved development experience to date. While implementing the login functionality
                        using Spotify's documentation was difficult at first I found it very gratifying once it was successful. I found the process of 
                        creating and manipulating the result API calls very fun as I was performing the operations on my own Spotify data. I now find
                        myself very comfortable with API's as a whole and have taken higher interest in new projects involving API's as a result.
                    </p>
                    <a href="https://github.com/cam-obrien/SpotifyWrappedApp" className="github-link" target="_blank" rel="noreferrer noopener"> View This Project On My Github </a>
                </Project>

                <Project title="AI Pacman" subheading="Software Engineering | Python">
                    <p>

                    <h3> Goals </h3>

                    The primary objective of this project was to immerse our team of five developers in a real-world software engineering experience. Regarding actual development of the
                    application we aimed to create a web-accessed playable version of the classic game Pacman where the user competes against an AI playing at the same time. The player 
                    and AI game boards would reside on the left and right sides of the screen allowing users to easily view their progress in comparison to the AI.

                    <h3> Development Approach</h3>

                    We followed a Scrum framework throughout the 8 weeks of this software's development. We rotated positions (i.e Scrum Master, Product Owner, Developer) after every two 
                    week sprint. Due to unforseen circumstances we lost a team member along the way and I volunteered to serve as Scrum Master for a second time while simultaneously operating
                    on the development team. We developed this software using Godot, a Python-based game developing engine. We followed the classic Pacman's game mechanics including board and ghost behavior during
                    our implementation. 

                    <h3> Challenges </h3>
                    We first ran into difficulties when implementing the ghosts' various behaviors. Before embarking on this development process most of the members of our development team
                    weren't even aware that each of the different ghosts had their own behviors. It took insight from all members of the team to think of efficient and fair implementations
                    of each ghost. The most difficult part of the implementation was creating the Pacman AI to compete against the user. We needed to create an AI that was capable of beating
                    the ghosts but did not have an unfair advantage by knowing the ghost's future behavior. Luckily with our experience creating the ghosts' AI we could recall some tactics
                    for implementing the Pacman's AI. We were able to fully implement a fair and comptent Pacman AI that made competing feasible and entertaining.

                    <h3> Takeaways </h3>
                    The most valuable takeway from this project came from experience with Scrum framework and working as a large team. Gaining experience with practices used in real-world
                    software engineering jobs settled my nerves for what to expect in my future career. The team I was put on to consisted of developers from broad backgrounds and even some
                    with very limited English speaking capacities. Our team learned to adapt to these circumstances to maintain efficient communication throughout the development cycle. 

                    </p>  
                    <a href="https://github.com/cam-obrien/AI-Pacman" className="github-link" target="_blank" rel="noreferrer noopener"> View This Project On My Github </a>  
                </Project>

                <Project title="Retail Databases Interface" subheading="Backend Driven Web Interface | Python &#38; SQL">
                    <p>

                    <h3> Overview </h3>

                    Our primary objective for this project was to emulate the creation of a web-based interface to be used in a retail setting to track
                    product quantities, customer accounts, orders, various stores, and other essential business information. The the theoretical business
                    we created this software for was a lacrosse focused equipment and merchandise store.

                    <h3> Database Design </h3>
                    
                    My teammate and I would spend the majority of this project's duration designing the database's tables, creating ERD diagrams and schemas,
                    and testing the overall design of the database's implementation before working on the interface. This planning can be viewed in the executive
                    summary attached to the Github repository linked at the bottom of this project description.

                    <h3> Interface Development </h3>

                    The interface for this application was created with Python and Flask on an Oregon State server over a two week period. The interface includes
                    pages to view, update, and add table entries to the Products, Orders, Customers, and Stores tables. The various operations of the interface use 
                    Python to call DML SQL queries to manipulate the database's data. 

                    <h3> Takeaways </h3>

                    This project was almost entirely based on SQL which I was previously new to. I found the planning process of the database to be initially tedious
                    but came to realize its importance when implementing the database. Looking back on the project I have new interest in pursuing full stack or even backend
                    development. I gained a lot of experience with web development using Python throughout this project which would set me up for success when moving to Django
                    based applications in the future. This was my first experience working in a small development team of two which allowed me to feel in control of
                    the direction of the project and has motivated me to seek similar opportunites in the future.

                    </p>    
                    <a href="https://github.com/cam-obrien/Retail-Database-Interface" className="github-link" target="_blank" rel="noreferrer noopener"> View This Project On My Github </a>  
                </Project>

                <Project title="Glassdoor for Migrant Workers" subheading="Inclusive Design | Figma Prototyping, Use Cases, &#38; Heuristic Evaluations">
                    <p>

                    <h3> Goals </h3>

                    The main goal of this project was to identify an underserved user population and emulate the creation of some 
                    software service to provide them with a service that brings them closer to the greater population. We chose migrant workers as our underserved population
                    and set out to create a service like Glassdoor to allow them to find jobs in their area.

                    <h3> Obstacles </h3>

                    In order to create a job finding service for this underserved population the app would not be able to store much of the user's information as the underserved
                    population would likely aovid providing information that could get them deported from the United States. Job listings would need to be verified as non-sting
                    operations for deporting agencies as well for the same reason. Another obstacle we would have to tackle was accessibility. Studies show that migrant workers are
                    commonly limited to less advanced devices and sometimes only access the internet through public computers. This meant our application would have to be reachable
                    and runnable on as many devices as possible.

                    <h3> Mock Development </h3>

                    We began our mock development by creating two personas, a member of our underserved population and a "mainstreamer". We created use cases for both of these personas
                    and began creating features for our application that would satisfy both the mainstreamer and our underserved persona. Next we went through three phases of creating
                    prototypes. Each round of prototype was created with a higher level of fidelity than the last with the first being made of paper and the final being made using Figma.
                    After each prototype was made we performed heuristic evaluations and surveyed outside potential users on the flow and user friendliness of the design. We ended our 
                    mock development with a high fidelity Figma prototype that had been highly critiqued and tweaked to be usable for both our underserved and mainstreamer personas.

                    <h3> Takeaways </h3>

                    This project exposed me to UX Design and UX Research, something I had always wanted to pursue. I found the process of creating personas, use cases, and prototypes very
                    interesting. There are many aspects of the user experience that I had previously never thought about. The experience I gained through heuristic evaluations have proved
                    very useful in designing user friendly applications.

                    </p>    
                </Project>


        </div>
    )

}

export default Projects