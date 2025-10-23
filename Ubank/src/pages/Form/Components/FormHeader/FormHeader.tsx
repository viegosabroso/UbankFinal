
import img from '../../../../assets/form_logo.png';
import '../FormHeader/Header.css';

interface Props {

    goback: () => void;
    }

const Header = ({goback}: Props) => {

    
    return (
    <header>
        <div>

        <img className= "header" src={img} alt="Ubank" onClick={goback} />
        </div>
    </header>
    );
};

export default Header;
