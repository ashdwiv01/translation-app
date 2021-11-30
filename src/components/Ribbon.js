import Dropdown from './dropdown/Dropdown';
import classes from './Ribbon.module.css';

function Ribbon(props){

    return <div className={classes.body}>
        <h5>{props.ribText}</h5>
        <Dropdown getLangCode={lg => props.getLang(lg)}/>
    </div>
}

export default Ribbon;