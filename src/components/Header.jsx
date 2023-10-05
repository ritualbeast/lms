import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/header.css';
import svgManager from '../assets/img/svg';
import UserIcon from '../assets/img/userIconn.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const bellSVG = svgManager.getSVG('bell');
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {setAnchorEl(event.currentTarget);};
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  }




  return (
    <div>
        <Row className="header">
            <Col md={10} >
                <p className="tituloHeader"
                >Leads Management System</p>
            </Col>
            <Col md={2}>
              
              <div className="headerIcons" style={{display: 'flex', padding: '5px', justifyContent: 'space-around', alignItems: 'end'}}>
                
                <span dangerouslySetInnerHTML={{ __html: bellSVG }} />
                <img src={UserIcon} alt="User Icon" className="userIcon sameHeight" width={30} height={30} onClick={handleClick} />
                <div>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem 
                    style={{fontFamily: 'Public Sans', fontSize: '12px', fontWeight: '600', lineHeight: '22px'} }
                    onClick={handleLogout}>Cerrar Sesion
                    </MenuItem>
                  </Menu>
                </div>

              </div>
            </Col>
        </Row>
        
      
    </div>
  )
}

export default Header
