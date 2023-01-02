import '../App.css';
import '../css/homepage.css'
import profile from '../profile.png'

function HomepageComponent() {
  return (
    <div className="Homepage">
        <div className = "header">
            <p>Helena Sveinborg Jónsdóttir</p>
        </div>
        <div className='column_div'>
        <div className='card homepage_card' id ='purple_card'>
            <p>
                Hi! Welcome to my website. I'm Helena, I live in New York but I'm originally from Iceland.
                On this website, you get a chance to learn more <a href="/about_me">about me</a>, 
                what <a href="/projects">projects</a> I've worked on in the past, my work experience and other interests. Browse around and don't
                hesitate to contact me if you have any questions. </p>
        </div>
            <div className = "profile_pic">
                <img src={profile} alt = "Helena"/>
            </div>
            <div className = "card homepage_card" id="purple_card">
                <h3>Contact information</h3>
                <p>Email: h.jonsdottir@columbia.edu</p>
                <p>Phone number (USA): (+1) 917 325 6733</p>
                <p>Phone number (Iceland): (+354) 776 2730</p>
            </div>
        </div>
    </div>
  );
}

export default HomepageComponent;
