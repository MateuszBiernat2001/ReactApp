import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'

const Sunday = ({ sunday }) => (
  <UserPageTemplate pageType="sunday">
    {sunday.map(({ content, id }) => (
      <Card id={id} cardType="sunday"  content={content} key={id} />
    ))}
  </UserPageTemplate>
);

Sunday.propTypes = {
  sunday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Sunday.defaultProps = {
  sunday: [],
};



const mapStateToProps = state => {
  const { sunday } = state;
  return { sunday };
}

export default connect(mapStateToProps)(Sunday);
