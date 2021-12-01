import React, {Component} from "react";
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar';
import styled from "styled-components";
import ButtonIcon from "../components/atoms/ButtonIcon/ButtonIcon";
import plus from '../assets/icons/plus.svg'
import NewItemBar from "../components/organisms/NewItemBar";
import withContext from '../hoc/withContext'

const GridWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.monday)};
  border-radius: 5px;
  bottom: 40px;
  right: 40px;
  background-size: 80%;
  height: 45px;
  width: 45px;
  z-index:99999;
`;

class UserPageTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleNewItemBarToggle = () => {
    this.setState(prevState => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render(){
    const {children, pageType} = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <>
      <Sidebar pageType={pageType}/>
      <GridWrapper>
        {children}
      </GridWrapper>
      <StyledButtonIcon
        icon={plus}
        activeColor={pageType}
        onClick={this.handleNewItemBarToggle}
      />
      <NewItemBar isVisible={isNewItemBarVisible} />
      </>
    )
  }
}


UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};


UserPageTemplate.defaultProps = {
  pageContext: 'monday',
};

export default withContext(UserPageTemplate);