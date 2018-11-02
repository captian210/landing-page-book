import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarCollapse extends Component {
  render() {
    const { isOpen, children } = this.props;
    return <div className={`${!isOpen ? 'collapse' : ''} navbar-collapse`}>{children}</div>;
  }
}

NavbarCollapse.propTypes = {
  /**
   * Open or close component. Default `true`
   */
  isOpen: PropTypes.bool,
  /**
   * Elements show into the NavbarCollapse
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
NavbarCollapse.defaultProps = {
  isOpen: true,
  children: null
};

export default NavbarCollapse;
