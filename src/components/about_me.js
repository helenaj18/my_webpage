import '../index.css'
import '../css/about_me.css'

function AboutMeComponent() {
  return (
    <div className="AboutMe">
      <div className = "header">
            <p>About me</p>
      </div>
      <div className='card about_me_card' id ='purple_card'>

          <p>I'm a master's student in Computer Science at Columbia University.
                  I'm on the machine learning track, but I'm also interested in Cybersecurity topics, 
                  so I'm taking courses on that. 
                  I finished a BSc. degree in Computer Science from Reykjavík University (RU) in June 2022 and graduated with 
                  an acknowledgment for good academic results. The year prior, in 2021, I graduated at the top of my class with a
                  BSc. degree in Mechanical Engineering from RU. I chose Mechanical Engineering in 2018 mainly because I knew it 
                  would be challenging. However, when I was introduced to programming at the beginning of my undergraduate 
                  studies, there was no going back. I realized that what I was studying could also be a hobby! 

                  I've worked summer jobs since I was 15 years old, and I've gained experience in sales and consulting from when 
                  I was a car sales specialist, communication skills from when I worked at a car rental, and technical skills 
                  from when I worked for my own company in the summer of 2022.

                  I hope to work at a company where I can use my knowledge to make the world a better place, e.g., by fighting 
                  cyber criminals or leveraging artificial intelligence to ensure equality. 
                  I want to keep learning after my studies and stay on top of technology for as long as possible. While I do all 
                  of this, I want to be a role model for young girls looking to start a career in the technological industry. 
                  To support this goal, I launched an Instagram account dedicated to showing Icelandic girls female role models 
                  in the industry. I reached 500 followers in the first month. Check it out <a href="https://www.instagram.com/ada_konur/">here</a>.</p>
      </div>
      <div className='card about_me_card' id ='purple_card'>
              In my freetime, I enjoy doing Crossfit exercises in great company of friends, hiking in the Icelandic nature,
              relax in the hottub of the swimming pool of my hometown, travel with loved ones and just having fun in general!
              I love a good novel and I listen to either an educational or entertaining podcast on my way to school every day.
      </div>
    </div>
  );
}

export default AboutMeComponent;
