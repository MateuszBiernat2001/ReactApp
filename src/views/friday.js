import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/moleculs/Card/Card'



const Friday = ({friday}) => (
  <UserPageTemplate pageType="friday">
    {friday.map(item => (
      <Card
    cardType = "friday"
    content = {item.content}
    />
))}
  </UserPageTemplate>
);

const mapStateToProps = state => {
  const { friday } = state;
  return { friday };
}

export default connect(mapStateToProps)(Friday);
