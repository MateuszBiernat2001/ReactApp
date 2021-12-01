import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'



const Friday = ({ friday }) => (
  <UserPageTemplate pageType="friday">
    {friday.map(({ content, id }) => (
      <Card id={id} cardType="friday"  content={content} key={id} />
    ))}
  </UserPageTemplate>
);

Friday.propTypes = {
  friday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Friday.defaultProps = {
  friday: [],
};


const mapStateToProps = state => {
  const { friday } = state;
  return { friday };
}

export default connect(mapStateToProps)(Friday);
