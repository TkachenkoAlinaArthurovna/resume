import styles from "@/app/Components/Photo/photo.module.scss";

export default function Photo() {
  return (
    <div className={styles.top_wrapper}>
      <div className={styles.photo}>
        <img src={"/images/my_resume_photo.jpg"}></img>
      </div>
      <div className={styles.info}>
        <div className={styles.info__name}>
          <span>Alina</span> Tkachenko
        </div>
        <div className={styles.info__speciality}>FRONT-END DEVELOPER</div>
      </div>
    </div>
  );
}
