import i18n from "../path/i18n";
import britain from '../images/britain.png';
import spain from '../images/spain.png';

function BtnLanguage() {
    return (
        <ul className="language">
            <button className="language__es" onClick={() => i18n.changeLanguage("es")}><img className="es" src={spain} alt="Spanish flag" /> </button>
            <button className="language__en" onClick={() => i18n.changeLanguage("en")}><img className="en" src={britain} alt="Britain flag" /></button>
        </ul>
    )
}
export default BtnLanguage;