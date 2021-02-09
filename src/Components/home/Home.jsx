import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { MdContactMail } from "react-icons/md";
import git from "../../../public/git.svg";
import home from "../../../public/home.png";
import omnibiz from "../../../public/omnibiz.png";
import dashboard from "../../../public/dashboard.png";
import vgg from "../../../public/vgg.png";
import Experience from "../experience/Experience";
import Project from "../projects/projects";

import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__left}>
        <div className={styles.wrapper__left__item} id="contact">
          <div className={styles.bio}>
            <img
              src={git}
              alt=""
              width="100%"
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />

            <h3 className={styles.gradient__text}>Samuel Ayegbusi</h3>
            <p className={styles.stack}>Frontend Developer</p>
          </div>

          <div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:stemitope370@gmail.com"
            >
              <div className={styles.email}>
                <div style={{ margin: "10px 10px 0 0" }}>
                  <MdContactMail size={"1.4rem"} />
                </div>
                <p> stemitope370@gmail.com</p>
              </div>
            </a>
            <div
              className={styles.phone}
              onClick={() => (window.location.href = "tel:+2347033098551")}
            >
              {" "}
              <div style={{ margin: "5px 10px 0 0" }}>
                <FiPhone />
              </div>
              <p> Tap here to call me</p>
            </div>

            <p className={styles.motivation}>
              Self-motivated, self-taught developer, who is willing to learn and
              create outstanding UI applications.
            </p>

            <p>Connect with me</p>
            <div className={styles.contact__flex}>
              <IconContext.Provider value={{ size: "1.5rem" }}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Sambalicious"
                >
                  <FaGithub />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://facebook.com/cixtein"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/sambalicious_"
                >
                  <FaTwitter />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-ayegbusi-355169104/"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://stackoverflow.com/users/12493766/sambalicious"
                >
                  <FaStackOverflow />
                </a>
                <a
                  href="https://wa.me/2347033098551"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaWhatsapp />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <h3 id="experience" className={styles.experience}>
          Experiences
        </h3>
        <div className={styles.wrapper__left__item}>
          <Experience
            img={omnibiz}
            duration={"September 2020 - Present"}
            company={"Omnibiz Africa"}
            job={
              " Donec aliquam est dui, vel vestibulum diam sollicitudin id.Quisque feugiat malesuada molestie."
            }
            role={"Frontend Developer"}
          />

          <Experience
            img={vgg}
            duration={"January 2020 - June 2020"}
            company={"Venture Garden Group"}
            job={
              " Donec aliquam est dui, vel vestibulum diam sollicitudin id.Quisque feugiat malesuada molestie."
            }
            role={"Frontend Developer (Intern)"}
          />
        </div>
      </div>

      <div className={styles.wrapper_right}>
        <div className={styles.wrapper__right}>
          <div>
            <h3 id="tools" className={styles.tools}>
              Tools
            </h3>

            <div className={styles.tools__items}>
              <h1>HTML</h1>
              <h1>CSS3</h1>
              <h1>Javascript</h1>
              <h1> ReactJS</h1>
              <h1> NextJS</h1>
              <h1>MongoDB</h1>
              <h1> TailwindCSS</h1>
              <h1> Bootstrap</h1>
              <h1>Firebase</h1>
              <h1>RestAPI</h1>
              <h1>C#</h1>
              <h1>Github</h1>
              <h1>Styled-Components</h1>
              <h1>Netlify</h1>
              <h1>Vercel</h1>
              <h1>Heroku</h1>
            </div>
          </div>
          <h3 id="projects" className={styles.projects}>
            Projects
          </h3>
          <div className={styles.wrapper__right__item}>
            <Project
              tools={"#React, #TailwindCSS , #Imgur API, #Cloudinary API"}
              img={home}
              title={"EduGrid"}
              about={
                " In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam estdui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
              }
            />
            <Project
              tools={"#NextJS, #Rest API, #React"}
              img={home}
              title={"World Ranks"}
              about={
                " A NextJs Application that provides informations about Countries. User can search for countries by Name, Region or Sub Region. User can also toggle between dark and light mode depending on their preference"
              }
            />
            <Project
              tools={"#Rest API, #React, #PWA, #SCSS"}
              img={dashboard}
              title={"Omnibiz Dashboard App"}
              about={
                " In this project, I sharpened my NextJs knowledge by building world Countries App while consuming a third party RestAPI.  ."
              }
            />
          </div>

          <Link href="/blogs">
            <h3 className={styles.blog}>Blogs</h3>
          </Link>
          <div className={styles.wrapper__right__item}>
            <h3>Coming Soon...</h3>
            {/* <Blog
            description={
              " In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
            }
            img={home}
            title={"Introduction to CSS"}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
