import styled from 'styled-components';

const Btn = styled.button`
    align-items: center;
    background-color: rgba(0,0,0,0);
    border: 2px solid ${({ theme }) => theme.palette.white};
    border-radius: 50px;
    box-shadow: 0px 1px 1px gray;
    display: flex;
    justify-content: center;
    padding: 0 20px;
    transition: background 0.5s;
    .icon-right{
        margin-left: 10px;
    }
    :hover{
        background-color: ${({ theme }) => theme.palette.secondary};
    }
    @media(max-width: 650px){
        background-color: ${({ theme }) => theme.palette.secondary};
        border: none;
        box-shadow: none;
        height: 45px;
        text-shadow: none;
        transition: none;
    }
`

export default Btn;