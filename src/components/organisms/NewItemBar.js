import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import withContext from '../../hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from '../../actions/index';
import { Formik,  Form, } from 'formik';


const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 90vw;
  background-color: #D8D8D8;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledButton = styled(Button)`
  position: fixed;
  z-index: 99999999;
  background-color: white;
  color: gray;
  height:42px;
  width: 104px;
  bottom: 36%;
  left: 48%;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Formik
      initialValues={{ content: '' }}
      onSubmit={values => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledTextArea
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <StyledButton type="submit" activecolor={pageContext}>
            Add Note
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);


NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem:(itemType, itemContent) =>
  dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));

