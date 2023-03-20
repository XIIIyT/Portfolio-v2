import styles from './Header.module.scss';
import Logo from "../../assets/images/Quinto.png";
import {ReactComponent as SeachIcon} from "../../assets/icons/search.svg"; 
import {ReactComponent as Hamburger} from "../../assets/icons/hamburger.svg";
const Header = () => {
  return (
        <div className={styles.headerWrapper + ' container'}>
            <picture className={styles.HeaderLogo}>
                <img src={Logo} alt="Logo" />
            </picture>
            <div className={styles.SearchItem}>
                <SeachIcon />
            </div>
            <div className={styles.HeaderMenu}>
                <h3>Menu</h3>
                <Hamburger />
            </div>
        </div>
        )
}

export default Header