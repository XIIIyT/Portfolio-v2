import styles from './Header.module.scss';
import Logo from "../../assets/images/Quinto.png";
import {ReactComponent as SeachIcon} from "../../assets/icons/search.svg"; 
import {ReactComponent as Hamburger} from "../../assets/icons/hamburger.svg";
const Header = () => {
  return (
        <div className={styles.headerWrapper}>
            <picture className="Header-Logo">
                <img src="{Logo}" alt="Logo" />
            </picture>
            <div className="search-item">
                <SeachIcon />
            </div>
            <div className="Header-Menu" id="Header-Menu">
                <h3>Menu</h3>
                <Hamburger />
            </div>
        </div>
        )
}

export default Header