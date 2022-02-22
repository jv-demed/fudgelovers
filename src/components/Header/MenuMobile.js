import { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiMenu } from 'react-icons/bi';

const ResponsiveMenu = styled.div`
    display: none;
    @media(max-width: 650px){
        display: flex;
        :hover{
            background-color: rgba(1,1,1,0.05)
        }
        .hamburger{
            color: ${({ theme }) => theme.palette.white};
        }
    }
`

export default function MenuMobile() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <ResponsiveMenu>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <BiMenu className='hamburger' size={50} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <a href='#products'>
                    <MenuItem 
                        style={{ backgroundColor: '#8b0d33', 
                            fontFamily: 'Cairo, sans-serif', 
                            fontSize: '16pt'
                        }} 
                        onClick={handleClose}
                    >
                            Destaques
                    </MenuItem>
                </a>
                <a href='#about'>
                    <MenuItem 
                        style={{ backgroundColor: '#8b0d33', 
                            fontFamily: 'Cairo, sans-serif', 
                            fontSize: '16pt'
                        }}  
                        onClick={handleClose}
                    >
                        Sobre Nós
                    </MenuItem>
                </a>
                <a href='#contact'>
                    <MenuItem 
                        style={{ backgroundColor: '#8b0d33', 
                            fontFamily: 'Cairo, sans-serif', 
                            fontSize: '16pt'
                        }} 
                        onClick={handleClose}
                    >
                        Contato
                    </MenuItem>
                </a>
            </Menu>
        </ResponsiveMenu>
    );
}