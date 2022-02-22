import { kyte } from '../../data/infos';
import { BiShoppingBag } from 'react-icons/bi';

export default function IconKyte(props){
    return(
        <a href={kyte.link} target='_blank'>
            <BiShoppingBag size={props.size} />
        </a>
    )
}