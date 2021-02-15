import styles from "./Experience.module.css";
const Experience = ({ data }) => {
  return (
    <div className={styles.wrapper__left__item}>
      <div className={styles.wrapper__left__item__flex}>
        <div className={styles.experience__image}>
          <img src={data.img} alt="" width="108" height="108" />
        </div>

        <div>
          <p className={styles.mute}>{data.duration}</p>

          <h5 className={styles.text__700}>{data.role}</h5>

          <p className={styles.company}>{data.company}</p>
          <p className={styles.exp}>{data.job}</p>
        </div>
      </div>
      <div>
        {data.achievements.map((achievement, index) => (
          <p className={styles.achievement} key={index}>
            <span>📌</span> {achievement}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Experience;
