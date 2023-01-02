import '../App.css';
import '../css/homepage.css'
import profile from '../profile.png'

function HomepageComponent() {
  return (
    <div className="Homepage">
        <div className = "header">
            <h1>Helena Sveinborg Jónsdóttir</h1>
        </div>
        <div className='column_div'>
        <div className='card homepage_card' id ='purple_card'>
            <p>
                Hi! Welcome to my website. Here you get a chance to learn more about me, what projects
                I've worked on in the past, my work experience and other interests. Browse around and don't
                hesitate to contact me if you have any questions. </p>
        </div>
            <div className = "profile_pic">
                <img src={profile} alt = "Helena"/>
            </div>
            <div className = "contact_info card" id="purple_card">
                <h3>Contact information</h3>
                <p>Email: h.jonsdottir@columbia.edu</p>
                <p>Phone number (USA): (+1) 917 325 6733</p>
                <p>Phone number (Iceland): (+354) 776 2730</p>
            </div>
        </div>

    {/* <div className = "buttons">
        <button className= "Menu_buttons"><a href = "/projects">Projects</a></button>
        <button className= "Menu_buttons"><a href = "/resume">Resume</a></button>
        <button className= "Menu_buttons"> <a href = "https://www.linkedin.com/in/helenajonsdottir/">LinkedIn</a></button>
        <button className= "Menu_buttons"> <a href = "https://github.com/helenaj18">Github</a></button>
    </div> */}
    </div>
  );
}

export default HomepageComponent;
