import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'

const Thursday = ({ thursday }) => (
  <UserPageTemplate pageType="thursday">
    {thursday.map(({ content, id }) => (
      <Card id={id} cardType="thursday"  content={content} key={id} />
    ))}
  </UserPageTemplate>
);

Thursday.propTypes = {
  thursady: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Thursday.defaultProps = {
  thursday: [],
};



const mapStateToProps = state => {
  const { thursday } = state;
  return { thursday };
}

export default connect(mapStateToProps)(Thursday);