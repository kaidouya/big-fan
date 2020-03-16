import styled from 'styled-components';
import { Card as CardRebass } from 'rebass';

export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
})`
  position: relative;
  top: 0;
  height: 100%;
  padding: 20px 20px 50px;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }

  ul {
    padding-left: 10px;
    list-style-type: none;
    li {
      font-size: 0.8em;
    }
  }
`;

export default Card;
