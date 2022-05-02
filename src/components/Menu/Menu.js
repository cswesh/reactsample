import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link , NavLink } from 'react-router-dom'

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
     <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Home
      </a>
      <a href="/analyser" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        M365 Analyser
      </a>
      <a href="/recommender" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Recommender
        </a>
      <a href="/optimizer" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Optimizer
        </a>

    
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
