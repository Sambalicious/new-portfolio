import styles from "./Projects.module.css";

const Projects = ({ data }) => {
  return (
    <div className={styles.wrapper__right__item__flex__project}>
      <div className={styles.projects__img}>
        <img
          src={data.img}
          alt="projects"
          style={{ objectFit: "cover", width: "100%" }}
          height="100%"
          width="100%"
        />
      </div>
      <div>
        <p className={styles.mute}>{data.tools}</p>
        <h4 className={styles.bold}>{data.title}</h4>

        <h5 className={styles.mute}> {data.about}</h5>

        <div className={styles.button__flex}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={data.githubLink ? data.githubLink : ""}
            style={{
              opacity: data.disabled ? "0.2" : "",
              cursor: data.disabled ? "not-allowed" : "pointer",
            }}
            disabled={data.disabled}
          >
            Code
          </a>
          <a href={data.demo} rel="noopener noreferrer" target="_blank">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
