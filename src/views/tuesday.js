import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'


const Tuesday = ({tuesday}) => (
  <UserPageTemplate pageType="tuesday">
    {tuesday.map(item => (
      <Card
    cardType = "tuesday"
    content = {item.content}
    />
))}
  </UserPageTemplate>
);

const mapStateToProps = state => {
  const { tuesday } = state;
  return { tuesday };
}

export default connect(mapStateToProps)(Tuesday);

