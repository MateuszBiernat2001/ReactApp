import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'

const Saturday = ({ saturday }) => (
  <UserPageTemplate pageType="saturday">
    {saturday.map(({ content, id }) => (
      <Card id={id} cardType="saturday"  content={content} key={id} />
    ))}
  </UserPageTemplate>
);

Saturday.propTypes = {
  saturday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Saturday.defaultProps = {
  saturday: [],
};




const mapStateToProps = state => {
  const { saturday } = state;
  return { saturday };
}

export default connect(mapStateToProps)(Saturday);
