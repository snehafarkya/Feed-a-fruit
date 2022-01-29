import React from "react";
import video from "./video.mp4";
function Connect() {
  return (
    <>
      <div className="con">
        <p className="para">
          Would like to stay <span id="span">connected with me?</span> <br></br>
          Want to <span id="span">know who I am?</span>
        </p>
        <div className="links">
          <div className="vid">
            <video width="700" height="500" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="social">
            <div className="icon">
              <i class="fab fa-github"></i>
              <a
                className="a"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/snehafarkya"
              >
                Github -{" "}
                <blockquote>"A platform to showcase your skills"</blockquote>
              </a>
            </div>
            <div className="icon">
              <i class="fab fa-linkedin"></i>
              <a
                className="a" 
                rel="noreferrer"
                target="blank"
                href="https://www.linkedin.com/in/sneha-farkya-288773217/"
              >
                LinkedIn -{" "}
                <blockquote>
                  {" "}
                  "Something which has to be up-to-date "
                </blockquote>
              </a>
            </div>
            <div className="icon">
              <i class="fas fa-envelope-open-text"></i>
              <a
                className="a"
                rel="noreferrer"
                target="blank"
                href="mailto:snhafarkya@gmail.com"
              >
                Email - <blockquote> "The most familiar one "</blockquote>
              </a>
            </div>
            {/* <div className="icon">
         <i class="fab fa-girl"></i><a className='a' href="https://github.com/snehafarkya">Github</a>
         </div> */}
          </div>
        </div>
      </div>
      <footer>
        Made with ❤ by Sneha <br></br> Designed by Jaspreet
      </footer>
    </>
  );
}

export default Connect;
