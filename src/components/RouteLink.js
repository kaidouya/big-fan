import React from 'react';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';
import styled from 'styled-components';

const Box = styled.div`
  color: ${props => props.theme.greenTheme.secondFontColor};
  font-size: 16px;
  margin: 0px 0px 0px 8px;
  @media screen and (min-width: 40em) {
    margin-left: 16px;
    font-size: 20px;
  }
`;

const getChineseName = name => {
  switch (name) {
    case 'about':
      return '永磁直驅大風機';
    case 'projects':
      return '產品特色';
    case 'writing':
      return '詳細資料';
    default: return;
  }
};
const RouteLink = ({ onClick, selected, name }) => (
  <Box>
    <LinkAnimated onClick={onClick} selected={selected}>
      {getChineseName(name)}
    </LinkAnimated>
  </Box>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
};

export default RouteLink;
