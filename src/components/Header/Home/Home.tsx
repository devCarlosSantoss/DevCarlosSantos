import style from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <section className={style.homeContainer}>
        <div className={style.homeInformation}>
          <h5 className={style.homeName}>PORTFOLIO</h5>
          <p className={style.homeTextContainer}>
            <h1 className={style.homeProfileName}>Carlos Vinicius</h1>
            <span className={style.homeSkillName}>FULL-STACK DEVELOPER</span>
          </p>
        </div>
      </section>
    </>
  );
}
