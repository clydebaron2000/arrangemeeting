import React from "react";
import "./aboutUs.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const AboutUS = () => {
    return (

        
            <div className="aboutusContainer">

                <h2 className="header center text-team">Meet Our Team</h2>
                  {/* <h3 className="header col s12 light"></h3> */}
                

                <br />

                <div className="row">
                    <div className="col s3">
                        <div className="card text-center">
                            <div className="card-image">
                                {/* eslint-disable-next-line */}
                                <img src="https://avatars3.githubusercontent.com/u/20262899?s=460&u=390ab79f81706a983d393fe623c0fa86bfb22d1b&v=4" className="teamPhoto" alt="Image of Clyde" />
                                
                            </div>
                            <div className="card-action">
                            <span className="card-title">Clyde Rapinan</span>
                                <a href="https://www.linkedin.com/in/clydebaronrapinan/"><i className="fab fa-linkedin fa-3x" /></a>
                                <a href="https://github.com/clydebaron2000"><i className="fab fa-github fa-3x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card text-center">
                            <div className="card-image">
                                {/* eslint-disable-next-line */}
                                <img src="https://avatars0.githubusercontent.com/u/63487094?s=460&u=86927beb4a1b6ac2b54bb42188cc5c2a8af58f9a&v=4" className="teamPhoto" alt="Image of King" />
                                
                            </div>
                            <div className="card-action">
                            <span className="card-title ">King Ting </span><br/>
                                <a href="https://www.linkedin.com/in/king-t-80834917b/"><i class="fab fa-linkedin fa-3x" /></a>
                                <a href="https://github.com/Nardacyon"><i class="fab fa-github fa-3x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card text-center">
                            <div className="card-image">
                                {/* eslint-disable-next-line */}
                                <img src="https://patches9119.github.io/responsive-portfolio/assets/chuckeshoops.jpg" className="teamPhoto" alt="Image of Patrick" />
                                
                            </div>
                            <div className="card-action">
                            <span className="card-title">Patrick Sanders</span>
                                <a href="https://www.linkedin.com/in/patrick-sanders-003546193/"><i class="fab fa-linkedin fa-3x"></i></a>
                                <a href="https://github.com/patches9119"><i class="fab fa-github fa-3x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card text-center">
                            <div className="card-image">
                                {/* eslint-disable-next-line */}
                                <img src="https://avatars2.githubusercontent.com/u/67287151?s=460&u=8415b7379cd71c7b9262f70bcbc7c33a0ac5593e&v=4" className="teamPhoto" alt="Image of Mariella" />
                                
                            </div>
                            <div className="card-action">
                            <span className="card-title">Mariella Saviola </span>
                                <a href="https://www.linkedin.com/in/mariella-saviola/"><i class="fab fa-linkedin fa-3x" /></a>
                                <a href="https://github.com/msaviola"><i class="fab fa-github fa-3x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card text-center">
                            <div className="card-image">
                                {/* eslint-disable-next-line */}
                                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEQ160-Uw_vmw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=ZTkFqbF4g2fBmva4TAww3eNLE4TkNrL7GAE3wqmWmlc" className="teamPhoto" alt="Robert Graham" />
                                
                            </div>
                            <div className="card-action">
                            <span className="card-title">Robert Graham</span>
                                <a href="https://www.linkedin.com/in/robert-graham-ba1118b3/"><i class="fab fa-linkedin fa-3x" /></a>
                                <a href="https://github.com/Robmgraham"><i class="fab fa-github fa-3x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card text-center">
                            <div className="card-image">
                                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHzraMTFMbo3w/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=Xz8EdudwwL1jeoUuiZJFzZGAoCeVvBTBi14-GFTi4XY" className="teamPhoto" alt="Robert Graham" />
                                
                            </div>
                            <div className="card-action aboutUsCard">
                            <span className="card-title">Johnny Lieu</span>
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