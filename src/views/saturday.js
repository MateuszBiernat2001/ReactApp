import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'



const Saturday = ({saturday}) => (
  <UserPageTemplate pageType="saturday">
    {saturday.map(item => (
      <Card
    cardType = "saturday"
    content = {item.content}
    />
))}
  </UserPageTemplate>
);

const mapStateToProps = state => {
  const { saturday } = state;
  return { saturday };
}

export default connect(mapStateToProps)(Saturday);
