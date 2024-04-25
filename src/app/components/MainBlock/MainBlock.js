import styles from "@/app/Components/MainBlock/mainBlock.module.scss";

import Link from "next/link";

export default function MainBlock({ children }) {
  return (
    <div className={styles.main_block}>
      <div className={styles.main_block__wrapper_block}>
        <div className={styles.main_block__title}>
          <span>Alina</span> Tkachenko
        </div>
        <div className={styles.main_block__speciality}>FRONT-END DEVELOPER</div>
      </div>
      <div className={styles.main_block__wrapper_block}>
        <div className={styles.main_block__sub_title}>Profile</div>
        <div className={styles.main_block__text}>
          I am a web developer specializing in front-end development. I love my
          job. I think that I’m creative, hard-working, and detail-oriented. I
          am constantly learning new technologies and tools to stay up-todate
          with the latest trends and improve my skills. I am able to work well
          under pressure and adhere to strict deadlines. I have experience
          working as part of a team and individually.
        </div>
      </div>
      <div className={styles.main_block__wrapper_block}>
        <div className={styles.main_block__sub_title}>Project</div>
        <div className={styles.main_block__wrapper_link}>
          <Link href={"https://eco-bike.com.ua/"} target="_blank">
            eco-bike.com.ua
          </Link>
        </div>
        <div className={styles.main_block__text}>
          Technology stack: Next.js, React, Redux, Formic, Swiper, Material Ui.
        </div>
      </div>
      <div className={styles.main_block__wrapper_block}>
        <div className={styles.main_block__sub_title}>Website layout</div>
        <div className={styles.main_block__wrapper_link}>
          <Link href={"https://realbeer.ua/"} target="_blank">
            realbeer.ua
          </Link>
        </div>
        <div className={styles.main_block__text}>
          Technology stack: HTML, SASS, JavaScript.
        </div>
      </div>
      <div className={styles.main_block__wrapper_block}>
        <div className={styles.main_block__sub_title}>Examples of work</div>
        <div className={styles.main_block__wrapper_link}>
          <Link href={"https://glivera-team.vercel.app/"} target="_blank">
            glivera-team.vercel.app
          </Link>
        </div>
        <div className={styles.main_block__wrapper_link}>
          <Link href={"https://smart-orange-one.vercel.app/"} target="_blank">
            smart-orange-one.vercel.app
          </Link>
        </div>
      </div>
      <div className={styles.main_block__wrapper_block}>
        <div className={styles.main_block__sub_title}>Experiences</div>
        <div className={styles.main_block__text}>
          <span>Сompany :</span> К2{" "}
        </div>
        <div className={styles.main_block__text}>
          <span>Website : </span>
          <Link href={"https://corp2.eu/"} target="_blank">
            corp2.eu
          </Link>
        </div>
        <div className={styles.main_block__text}>
          <span>Start of work :</span> June 2023
        </div>
        <div className={styles.main_block__text}>
          <span>Position :</span> front-end developer
        </div>
        <div className={styles.main_block__text}>
          <span>Responsibilities :</span> determining the structure and design
          of web pages, ensuring web design is optimized for smartphones,
          building reusable code for future use, programming the functionality
          of web page compo﻿nents, creating their interactivity, programming of
          mobile apps with ionic framework.
        </div>
      </div>
    </div>
  );
}
