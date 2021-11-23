import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from '../atoms/ButtonIcon/ButtonIcon';
import mondayIcon from '../../assets/icons/monday.svg'
import tuesdayIcon from '../../assets/icons/tuesday.svg'
import wednesdayIcon from '../../assets/icons/wednesday.svg'
import thursadayIcon from '../../assets/icons/thursday.svg'
import fridayIcon from '../../assets/icons/friday.svg'
import saturdayIcon from '../../assets/icons/saturday.svg'
import sundayIcon from '../../assets/icons/sunday.svg'
import logout from '../../assets/icons/logout.svg'

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0px;
  width: 100px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.monday)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  position:fixed;
  bottom: 15px;
  border-radius: 50%;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;




const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLinksList>
      <li>
        <ButtonIcon exact as={NavLink} to="/" icon={mondayIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/tuesday" icon={tuesdayIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/wednesday" icon={wednesdayIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/thursday" icon={thursadayIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/friday" icon={fridayIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/saturday" icon={saturdayIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/sunday" icon={sundayIcon} activeclass="active" />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" icon={logout} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
};

Sidebar.defaultProps = {
  pageType: 'monday',
};

export default Sidebar;
