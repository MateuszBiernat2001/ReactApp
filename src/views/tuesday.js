import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'

const Tuesday = ({ tuesday  }) => (
  <UserPageTemplate pageType="tuesday">
    {tuesday.map(({ content, id }) => (
      <Card id={id} cardType="tuesday"  content={content} key={id} />
    ))}
  </UserPageTemplate>
);

Tuesday.propTypes = {
  tuesday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Tuesday.defaultProps = {
  tuesady: [],
};



const mapStateToProps = state => {
  const { tuesday } = state;
  return { tuesday };
}

export default connect(mapStateToProps)(Tuesday);

