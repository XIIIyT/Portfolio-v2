import styles from "./HeroZone.module.scss";
import Me from '../../assets/images/Me.jpg';


const HeroZone = () => {
  return (
    <div className={styles.HeroZone + ' container'}>
      <div className={styles.Content + ' AddaptiveBox'}>
        <div className={styles.TextBlock}>
          <div className={styles.Hello}>
            <article></article>
            <h3>Hello</h3>
          </div>
          <p className={styles.IAm}>I’m Ivan Gorunov</p>
          <p className={styles.FrontEndDeveloper}>
            A FrontEnd Developer, product designer and
            content creator.
            </p>
          <p className={styles.OhHorse}>
            Of course, there’s so much more to me than
            just a few fancy titles. Scroll down and
            get to know me...
          </p>
        </div>
        <div className="ImageContainer">
          <img className={styles.MyImage} src={Me} alt="Me.jpg" />
        </div>
      </div>
      <div className={styles.IconScroll}>

      </div>
    </div>
  )
}

export default HeroZone