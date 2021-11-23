import React from "react";
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar';
import styled from "styled-components";


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

const UserPageTemplate = ({children, pageType}) => (
  <>
    <Sidebar pageType={pageType}/>
    <GridWrapper>
      {children}
    </GridWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children : PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])
}

UserPageTemplate.defaultProps = {
  pageType: 'monday',
};

export default UserPageTemplate;
