import styles from "./Projects.module.css";

const Projects = ({ img, tools, about, title, disabled, demo, githubLink }) => {
  return (
    <div className={styles.wrapper__right__item__flex__project}>
      <div className={styles.projects__img}>
        <img
          src={img}
          alt="projects"
          style={{ objectFit: "cover" }}
          height="200px"
          width="100%"
        />
      </div>
      <div>
        <p className={styles.mute}>{tools}</p>
        <h4 className={styles.bold}>{title}</h4>

        <div className={styles.mute}> {about}</div>

        <div className={styles.button__flex}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={githubLink}
            style={{
              opacity: disabled ? "0.2" : "",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            disabled={true}
          >
            Code
          </a>
          <a href={demo} rel="noopener noreferrer" target="_blank">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
