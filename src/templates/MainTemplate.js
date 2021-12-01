import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import Sidebar from '../components/organisms/Sidebar';

class MainTemplate extends Component {
  state = {
    pageType: 'monday',
  }

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }


  setCurrentPage = (prevState = '' ) => {
    const pageTypes = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    const {
      location: { pathname },
    }  = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if(prevState.pageType !== currentPage){
      this.setState({pageType : currentPage});
      console.log(this.state)
    }
  }


  render() {
    const { children } = this.props;

    return(
      <div>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <>
          <Sidebar/>
          {children}
        </>
      </ThemeProvider>
    </div>
    )
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default withRouter(MainTemplate);


