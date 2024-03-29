import styled from 'styled-components';
import Btn from '../Globals/Btn';

const Box = styled.div`
    background-color: rgba(0,0,0,0.3);
    border-radius: 5px;
    display: flex;
    height: 200px;
    img{
        border-radius: 5px 0 0 5px;
        height: 100%;
        min-width: 350px;
    }
    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px 0 15px 20px;
        width: 100%;
        .text{
            overflow: auto;
            padding-right: 20px;
            ::-webkit-scrollbar{
                width: 4px;
            }
            ::-webkit-scrollbar-thumb{
                background: ${({ theme }) => theme.palette.white};
            }
        }
        .btnBox{
            display: flex;
            justify-content: right;
            margin-right: 20px;
            margin-top: 15px;
        }
    }
    @media(max-width: 850px){
        img{
            min-width: 280px;
        }
    }
    @media(max-width: 650px){
        height: auto;
        img{
            display: none;
        }
        .content{
            .btnBox{
                justify-content: center;
            }
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