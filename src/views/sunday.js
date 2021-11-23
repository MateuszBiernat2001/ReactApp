import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'



const Sunday = ({sunday}) => (
  <UserPageTemplate pageType="sunday">
    {sunday.map(item => (
      <Card
    cardType = "sunday"
    content = {item.content}
    />
))}
  </UserPageTemplate>
);

const mapStateToProps = state => {
  const { sunday } = state;
  return { sunday };
}

export default connect(mapStateToProps)(Sunday);
