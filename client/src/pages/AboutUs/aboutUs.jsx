import React from "react";
import "./aboutUs.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const AboutUS = () => {
    return (
        <div className="aboutusContainer">
            <h2 className="header center text-team">Meet Our Team</h2>
            <div className="team-row row">
                <div className="col">
                    <div className="card">
                        <img src="https://avatars3.githubusercontent.com/u/20262899?s=460&u=390ab79f81706a983d393fe623c0fa86bfb22d1b&v=4" className="teamPhoto" alt="Clyde Baron Rapinan"/>
                        <div className="container">
                            <h2>Clyde Rapinan</h2>
                            <p className="title">Full Stack Developer</p>
                            {/* <p>I am god tier programmer. No questions needed, it's already done. Sham Wow!</p> */}
                            <a href="https://www.linkedin.com/in/clydebaronrapinan/"><i className="fab fa-linkedin fa-3x" /></a>
                            <a href="https://github.com/clydebaron2000"><i className="fab fa-github fa-3x"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src="https://avatars0.githubusercontent.com/u/63487094?s=460&u=86927beb4a1b6ac2b54bb42188cc5c2a8af58f9a&v=4" className="teamPhoto" alt="Mike"/>
                        <div className="container">
                            <h2>King Ting</h2>
                            <p className="title">Full Stack Developer</p>
                            {/* <p>UCSD Student, Computer Science Major. I enjoy computer programming and love taking opportunities to improve my skills, my journey as a programmer has only just begun.</p> */}
                            <a href="https://www.linkedin.com/in/king-t-80834917b/"><i className="fab fa-linkedin fa-3x" /></a>
                            <a href="https://github.com/Nardacyon"><i className="fab fa-github fa-3x"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                    <img src="https://patches9119.github.io/responsive-portfolio/assets/chuckeshoops.jpg" className="teamPhoto" alt="Image of Patrick" />

                        <div className="container">
                            <h2>Patrick Sanders</h2>
                            <p className="title">Full Stack Developer</p>
                            {/* <p>I have a mongo database connected to my twitter, and it looks like your girl keeps making requests to come into contact with me.</p> */}
                            <a href="https://www.linkedin.com/in/patrick-sanders-003546193/"><i className="fab fa-linkedin fa-3x"></i></a>
                            <a href="https://github.com/patches9119"><i className="fab fa-github fa-3x"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEQ160-Uw_vmw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=ZTkFqbF4g2fBmva4TAww3eNLE4TkNrL7GAE3wqmWmlc" className="teamPhoto" alt="Robert Graham" />
                        <div className="container">
                            <h2>Robert Graham</h2>
                            <p className="title">Full Stack Developer</p>
                            {/* <p>I don't usually come back to the scene of the crime. But when I do, I'm usually dumping another body in this lake behind me.</p> */}
                            <a href="https://www.linkedin.com/in/robert-graham-ba1118b3/"><i className="fab fa-linkedin fa-3x" /></a>
                            <a href="https://github.com/Robmgraham"><i className="fab fa-github fa-3x"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                    <img src="https://avatars2.githubusercontent.com/u/67287151?s=460&u=8415b7379cd71c7b9262f70bcbc7c33a0ac5593e&v=4" className="teamPhoto" alt="Image of Mariella" />

                        <div className="container">
                            <h2>Mariella Saviolla</h2>
                            <p className="title">Full Stack Developer</p>
                            {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                            <a href="https://www.linkedin.com/in/mariella-saviola/"><i className="fab fa-linkedin fa-3x" /></a>
                            <a href="https://github.com/msaviola"><i className="fab fa-github fa-3x"></i></a>
                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQHzraMTFMbo3w/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=Xz8EdudwwL1jeoUuiZJFzZGAoCeVvBTBi14-GFTi4XY" className="teamPhoto" alt="Robert Graham" />
                        <div class="container">
                            <h2>Johnny L.</h2>
                            <p class="title">Full Stack Developer</p>
                            {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                            <a href="https://www.linkedin.com/in/johnny-lieu/"><i class="fab fa-linkedin fa-3x" /></a>
                            <a href="https://github.com/johnnylieu"><i class="fab fa-github fa-3x"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUS