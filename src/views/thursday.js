import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'



const Thursday = ({thursday}) => (
  <UserPageTemplate pageType="thursday">
    {thursday.map(item => (
      <Card
    cardType = "thursday"
    content = {item.content}
    />
))}
  </UserPageTemplate>
);

const mapStateToProps = state => {
  const { thursday } = state;
  return { thursday };
}

export default connect(mapStateToProps)(Thursday);