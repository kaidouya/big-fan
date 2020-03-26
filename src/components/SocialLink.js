import React from "react"
import { Link } from "rebass"
import styled from "styled-components"
import PropTypes from "prop-types"
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.theme.greenTheme[props.color] || props.theme.greenTheme.fiveColor};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.greenTheme.fiveColor};
  }
`

const SocialLink = ({ name, url, color, target, prefix, interactive, animation, fontAwesomeIconType }) => (
  <Tooltip
    title={name}
    position="top"
    trigger="mouseenter"
    interactive={interactive}
    animation={animation}
    arrow="true"
  >
    <IconLink
      href={url}
      target={target}
      color={color}
      rel="noreferrer"
      aria-label={name}
    >
      <FontAwesomeIcon icon={[prefix, fontAwesomeIconType]} />
    </IconLink>
  </Tooltip>
)

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default SocialLink
