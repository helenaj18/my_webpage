import '../css/projects.css'

function ProjectsComponent() {
  return (
    <div className="Projects">
        <div className = "header">
            <p>Projects</p>
        </div>
        <div className='card project_card' id ='purple_card'>
          <h1>Ada konur</h1>
        <div className='project_text_img'>
          <p className='project_text'>Ada konur is a platform where the goal is to make female role models in the software industry
            more visible to young Icelandic women. I launched the account in mid October 2022 and reached over 
            500 followers in the first month. I manage the account by contacting Icelandic women in the industry to
            do a story-takeover for 24 hours and the goal is to have one woman per week. In between takeovers,
            I post both fun and educational posts and try to keep them current if there's something in particular going
            on at a specific time, e.g. when chatGPT took over the world for a while, I posted a little note about how it works.
            It has been a great success so far and a lot of fantastic and interesting women have been and are interested in 
            partaking in this project. I look forward to seeing more women graduate as Computer Scientists in the future 
            and hope that the platform can inspire young girls looking to start their university studies. 
            Check the instagram account out <a href= "https://www.instagram.com/ada_konur/">here</a> and feel free to follow!
          </p>
          <img class="project_img" id = "ada" src="ada_konur.png" alt="ada konur logo"></img>
        </div>
        {/* TODO: insert instagram as a part of the card */}
        {/* <div>
          <iframe width="320" height="440" src="https://www.instagram.com/ada_konur/embed" title="ada_insta_ifram" frameborder="0"></iframe>
        </div> */}
        </div>

        <div className='card project_card' id ='purple_card'>
          <h1>Fjármálaportið (e. Financial Portal)</h1>
          <div className='project_text_img'>
            <p className='project_text'>
            Fjármálaportið or the Financial Portal as we call it in English, is a financial software solution for individuals
            to keep track of their assets. I am a co-founder of the company and worked on making the minimum viable product (MVP)
            for the portal in the summer of 2022. I learned so much in the process, e.g. that three months in a 50% job
            was not enough time to get it done. So, I'm still working on it and hoping to launch the MVP in June 2023.
            </p>
            <img class="project_img" id="fjarmalaport" src="Fjarmalaportid.png" alt="Fjarmalaportid logo"></img>
          </div>
        </div>

        <div className='card project_card' id ='purple_card'>
          <h1>PORTAPLANTS</h1>
          <div className='project_text_img'>
            <p className='project_text'>PORTAPLANTS is a project I worked on in the summer of 2020 under the guidance of Dr. María S. Guðjónsdóttir at Reykjavík University.
              I designed and made small portable power plants to be used for teaching the public about renewable energy
              and in events like 
              Girls in Tech that Reykjavík University hosts each year. I made a windmill, a hydroelectric power plant and
              a geothermal power plant and used the same generator, made by me, for all of them. I learned how to 3D print 
              that summer and finally gained real-life experience in using CAD applications to draw 3D models.
            </p>
            <img class="project_img" id="portaplants" src="portaplants/vatnsorku_closeup.jpg" alt="portaplants hydroelectric power plant"></img>
          </div>
        </div>

        <div className='card project_card' id ='purple_card'>
          <h1>Heimaleikarnir</h1>
          <div className='project_text_img'>
          <p className='project_text'>Heimaleikarnir is a project I co-founded in April 2020 when Covid restrictions were most strict. 
            Heimaleikarnir was an online fitness competition where competitors would complete two at-home workouts
            each week for three weeks. The top three spots in all categories got prices from sponsors we had gathered.
            We made a website in the process where participants could register, insert their score and follow a leaderboard.
            We got three of Iceland's best Crossfitters to participate, Björgvin Karl Guðmundsson, Sara Sigmundsdóttir and Þuríður
            Erla Helgadóttir and that definately helped us get better registration.
            All proceeds went to the national hospital to fight Covid-19. Check out our instagram page <a href="https://www.instagram.com/heimaleikarnir/">here</a> 
            , and our facebook page <a href="https://www.facebook.com/heimaleikarnir">here</a>.
            We have closed the website for now but by clicking <a href="/heimaleikarnir">here</a>, you can see a version of the website before it was taken down.
          </p>
          <img class="project_img" id="heimaleikar" src="Heimaleikar_logo.png" alt="Heimaleikarnir logo"></img>
          </div>
        </div>
    </div>
  );
}

export default ProjectsComponent;
