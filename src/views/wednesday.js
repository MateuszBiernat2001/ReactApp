import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'



const Wednesday = ({wednesday}) => (
  <UserPageTemplate pageType="wednesday">
    {wednesday.map(item => (
      <Card
    cardType = "wednesday"
    content = {item.content}
    />
))}
  </UserPageTemplate>
);

const mapStateToProps = state => {
  const { wednesday } = state;
  return { wednesday };
}

export default connect(mapStateToProps)(Wednesday);


