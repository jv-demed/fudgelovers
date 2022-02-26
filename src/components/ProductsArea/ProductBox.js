import styled from 'styled-components';
import Btn from '../Globals/Btn';

const Box = styled.div`
    background-color: rgba(0,0,0,0.2);
    border-radius: 5px;
    display: flex;
    img{
        border-radius: 5px 0 0 5px;
        height: 200px;
        min-width: 350px;
    }
    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 20px 15px;
        .btnBox{
            display: flex;
            justify-content: right;
        }
    }
    @media(max-width: 650px){
        align-items: center;
        flex-direction: column;
        img{
            display: none;
        }
    }
`

export default function ProductBox(props){
    return(
        <Box>
            <img src={props.img} />
            <div className='content'>
                <div className='text'>
                    <h4>{props.title}</h4>
                    <span>{props.desc}</span>
                </div>
                <div className='btnBox'>
                    <a href={props.link} target='_blank'>
                        <Btn>Veja Mais</Btn>
                    </a>
                </div>
            </div>
        </Box>
    )
}