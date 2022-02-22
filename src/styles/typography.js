import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    h2, h3, h4, h5, button, .menuItem{
        font-family: 'Cairo', sans-serif;
    }
    span, input, textarea{
        font-family: 'Roboto', sans-serif;
    }
    .menuItem{
        color: ${({ theme }) => theme.palette.white};
        font-size: 16pt;
        text-shadow: 1px 1px 1px #000;
        a:hover{
            color: ${({ theme }) => theme.palette.lightgrey};
        }
    }
    h2{
        color: ${({ theme }) => theme.palette.white};
        font-size: 40pt;
        line-height: 65px;
        text-shadow: 1px 1px 1px #000;
    }
    h3{
        color: ${({ theme }) => theme.palette.white};
        font-size: 30pt;
        text-shadow: 1px 1px 1px #000;
    }
    h4{
        color: ${({ theme }) => theme.palette.white};
        font-size: 20pt;
        text-shadow: 1px 1px 1px #000;
    }
    h5{
        color: ${({ theme }) => theme.palette.white};
        font-size: 17pt;
        text-shadow: 1px 1px 1px #000;
    }
    span{
        color: ${({ theme }) => theme.palette.white};
        font-size: 15pt;
        text-shadow: 1px 1px 1px #000;
    }
    .footer{
        font-size: 12pt;
    }
    input, textarea{
        font-size: 15pt;
    }
    button{
        color: ${({ theme }) => theme.palette.white};
        font-size: 15pt;
        text-shadow: 1px 1px 1px #000;
    }
    a{
        color: ${({ theme }) => theme.palette.white};
    }
    @media(max-width: 650px){
        h2{
            font-size: 34pt;
        }
        h3{
            font-size: 20pt;
        }
    }
`

export default Typography;