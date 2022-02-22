import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { socialMedias, whatsapp } from '../../data/infos';

function IconFacebook(props){
    return(
        <a href={socialMedias.facebookLink} target='_blank'>
            <BsFacebook size={props.size} />
        </a>
    )
}

function IconInstagram(props){
    return(
        <a href={socialMedias.intagramLink} target='_blank'>
            <BsInstagram size={props.size} />
        </a>
    )
}

function IconWhatsapp(props){
    return(
        <a href={whatsapp.whatsappLink+whatsapp.whatsappNumber} target='_blank'>
            <BsWhatsapp size={props.size} />
        </a>
    )
}

export{ IconFacebook, IconInstagram, IconWhatsapp }