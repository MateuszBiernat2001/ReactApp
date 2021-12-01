import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'


const Monday = ({ monday }) => (
  <UserPageTemplate pageType="monday">
    {monday.map(({ content, id }) => (
      <Card id={id} cardType="monday"  content={content} key={id}/>
    ))}
  </UserPageTemplate>
);


Monday.propTypes = {
  monday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Monday.defaultProps = {
  monday: [],
};



const mapStateToProps = state => {
  const { monday } = state;
  return { monday };
}

export default connect(mapStateToProps)(Monday);
