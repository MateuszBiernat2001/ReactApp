import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled , { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import { connect } from 'react-redux';
import { removeItem as removeItemAction} from '../../../actions/index'

const Wrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px 15px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;


class Card extends Component {
  render() {
    const {
      id,
      cardType,
      content,
      removeItem,
    } = this.props;

    return (
      <Wrapper>
        <InnerWrapper onClick={this.handleCardClick} activeColor={cardType}>
          <StyledHeading>{cardType}</StyledHeading>
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(cardType, id)}>
            REMOVE
          </Button>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'monday',
};


const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Card);
