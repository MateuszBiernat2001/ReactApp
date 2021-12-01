import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'

const Wednesday = ({ wednesday }) => (
  <UserPageTemplate pageType="wednesday">
    {wednesday.map(({ content, id }) => (
      <Card id={id} cardType="wednesday"  content={content} key={id} />
    ))}
  </UserPageTemplate>
);

Wednesday.propTypes = {
  wednesday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Wednesday.defaultProps = {
  wednesday: [],
};



const mapStateToProps = state => {
  const { wednesday } = state;
  return { wednesday };
}

export default connect(mapStateToProps)(Wednesday);


