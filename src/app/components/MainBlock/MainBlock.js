import styles from "@/app/components/MainBlock/mainBlock.module.scss";

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
          with the latest trends and improve my skills. I have experience
          working as part of a team and individually.
          <div>
            <Link
              href={
                "https://dan-it.com.ua/uk/istorii/istoriya-alina-tkachenko/"
              }
              target="_blank"
            >
              dan-it.com.ua/uk/istorii/istoriya-alina-tkachenko/
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.main_block__wrapper_block}>
        <div className={styles.main_block__sub_title}>Examples of work</div>
        <div className={styles.main_block__wrapper_link}>
          <Link
            href={"https://sr-construction-wp.smartorange.com.ua/"}
            target="_blank"
          >
            sr-construction-wp.smartorange.com.ua/
          </Link>
          <div>(Company : Smart Orange)</div>
        </div>
        <div className={styles.main_block__wrapper_link}>
          <Link href={"https://realbeer.ua/"} target="_blank">
            realbeer.ua
          </Link>
          <div>(Company : K2)</div>
        </div>
        <div className={styles.main_block__wrapper_link}>
          <Link href={"https://www.aviksdrive.com.ua/"} target="_blank">
            aviksdrive.com.ua
          </Link>
          <div>(Company : K2)</div>
        </div>
        <div className={styles.main_block__wrapper_link}>
          <Link href={"https://smart-orange-one.vercel.app/"} target="_blank">
            smart-orange-one.vercel.app
          </Link>
        </div>
        <div className={styles.main_block__wrapper_link}>
          <Link
            href={"https://github.com/TkachenkoAlinaArthurovna/ebk-front"}
            target="_blank"
          >
            https://github.com/TkachenkoAlinaArthurovna/ebk-front
          </Link>{" "}
          - Link to the repository of the bicycle store built with Next.js,
          where I integrated the Nova Poshta API, payment system, and product
          data was pulled from the CRM.
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
          <span>End of work :</span> May 2024
        </div>
        <div className={styles.main_block__text}>
          <span>Position :</span> front-end developer
        </div>
        <div className={styles.main_block__text}>
          <span>Responsibilities :</span> website layout.
        </div>
      </div>
      <div className={styles.main_block__wrapper_block}>
        <div className={styles.main_block__text}>
          <span>Сompany :</span> Smart Orange{" "}
        </div>
        <div className={styles.main_block__text}>
          <span>Website : </span>
          <Link href={"https://smarto.agency/en/"} target="_blank">
            smarto.agency
          </Link>
        </div>
        <div className={styles.main_block__text}>
          <span>Start of work :</span> May 2024
        </div>
        <div className={styles.main_block__text}>
          <span>Position :</span> front-end developer
        </div>
        <div className={styles.main_block__text}>
          <span>Responsibilities :</span> website layout, 3D tour creation (
          <Link
            href={
              "https://north-development.smartorange.com.ua/3d/?&type=genplan&favourites="
            }
            target="_blank"
          >
            north-development
          </Link>
          ,{" "}
          <Link
            href={
              "https://3d-avalon-terra.smarto.agency/3d/?&favourites=&type=genplan"
            }
            target="_blank"
          >
            3d-avalon-terra
          </Link>{" "}
          ... ),360 apartment tour(
          <Link
            href={
              "https://apartment-tours.smartorange.com.ua/en/zhitlobud/?scene=0"
            }
            target="_blank"
          >
            apartment-tours zhitlobud
          </Link>
          ,{" "}
          <Link
            href={"https://apartment-tours.smartorange.com.ua/romb/?scene=0"}
            target="_blank"
          >
            apartment-tours romb
          </Link>{" "}
          ... ), website support and creating new pages on the website (
          <Link href={"https://optimisto.com.ua/"} target="_blank">
            optimisto
          </Link>
          ,
          <Link href={"https://www.central-park.vn.ua/"} target="_blank">
            central-park
          </Link>
          ... ), integration of Google Analytics into the website, working with
          the WordPress admin panel.
        </div>
      </div>
    </div>
  );
}
