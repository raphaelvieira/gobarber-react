import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

/*
{ children } -- all components children of DefaultLayout
*/
export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
