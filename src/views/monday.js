import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'



const Monday = ({monday}) => (
  <UserPageTemplate pageType="monday">
    {monday.map(item => (
      <Card
    cardType = "monday"
    content = {item.content}
    />
))}
  </UserPageTemplate>
);

const mapStateToProps = state => {
  const { monday } = state;
  return { monday };
}

export default connect(mapStateToProps)(Monday);
