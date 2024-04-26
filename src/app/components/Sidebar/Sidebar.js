import styles from "@/app/components/Sidebar/sidebar.module.scss";

import Link from "next/link";

import Photo from "@/app/components/Photo/Photo";

export default function Sidebar({ children }) {
  return (
    <div className={styles.sidebar}>
      <Photo />
      <div className={styles.sidebar__subtitle}>Contact</div>
      <div className={styles.sidebar__block}>
        <span>Phone : </span>
        <Link href="tel:+380934077443">+38 093 407 74 43</Link>
      </div>
      <div className={styles.sidebar__block}>
        <span>Email : </span>
        <Link href="mailto:tkachenkoalinaarthurovna@gmail.com">
          tkachenkoalinaarthurovna@gmail.com
        </Link>
      </div>
      <div className={styles.sidebar__block}>
        <span>Linkedin : </span>
        <Link
          href="https://www.linkedin.com/in/alina-tkachenko-2aa1b124b/"
          target="_blank"
        >
          www.linkedin.com/in/alina-tkachenko-2aa1b124b
        </Link>
      </div>
      <div className={styles.sidebar__block}>
        <span>GitHub : </span>
        <Link
          href="https://github.com/TkachenkoAlinaArthurovna"
          target="_blank"
        >
          github.com/TkachenkoAlinaArthurovna
        </Link>
      </div>
      <div className={styles.sidebar__block}>
        <span>Address : </span>
        <span className={styles.sidebar__ukraine}>Ukraine, Kyiv</span>
      </div>
      <div className={styles.sidebar__subtitle}>Hard skills</div>
      <div className={styles.sidebar__block}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Gulp</li>
          <li>Git</li>
          <li>GitLab</li>
          <li>GitHub</li>
          <li>React</li>
          <li>React Router</li>
          <li>Redux</li>
          <li>Next.js</li>
          <li>Formic/Yup</li>
          <li>GSAP</li>
          <li>Swiper</li>
          <li>Material UI</li>
          <li>Bootstrap</li>
          <li>Figma</li>
          <li>Photoshop</li>
        </ul>
      </div>
      <div className={styles.sidebar__subtitle}>Education</div>
      <div className={styles.sidebar__block}>
        <span>2023 • FrontEnd • DAN.IT : </span>
        <div>
          <Link
            href="https://dan-it.com.ua/certificates/frontend/alina-tkachenko/"
            target="_blank"
          >
            dan-it.com.ua/certificates/frontend/alina-tkachenko/
          </Link>
        </div>
      </div>
      <div className={styles.sidebar__block}>
        <span>2022 • HTML & CSS • HTML ACADEMY </span>
      </div>
      <div className={styles.sidebar__block}>
        <span>
          2008-2013 • Master of Pharmacy • NATIONAL UNIVERSITY OF PHARMACY
        </span>
      </div>
      <div className={styles.sidebar__subtitle}>Language</div>
      <div className={styles.sidebar__block}>
        <div>
          <span>English : </span>Intermediate (B1)
        </div>
        <div>
          <span>Ukrainian : </span>native
        </div>
      </div>
    </div>
  );
}
