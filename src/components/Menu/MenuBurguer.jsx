// REACT
import React from 'react';
import { bool } from 'prop-types';

// STYLE
import { StyledMenu } from './menuBurguerStyle';

// ANTD
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className="profile">
      <Avatar className="avatar" size="small" icon={<UserOutlined />} />Hello User
      </div>
  
      <h3>Serviços Amazon</h3>
      <a href="/">
        Amazon Music
        </a>
        <a href="/">
        Prime Vídeo
        </a>
        <a href="/">
        Kindle
        </a>
        <h3 >
        Compre por Categoria
        </h3>
        <a href="/">
        Computadores
        </a>
        <a href="/">
        Telefonia
        </a>
        <a href="/">
        Fashion
        </a>
        <a href="/">
        Sport
        </a>
        <a href="/">
        Alexa
        </a>
        <a href="/">
        Video-games
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;