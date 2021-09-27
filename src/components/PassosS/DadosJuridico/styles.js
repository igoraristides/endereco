import styled from 'styled-components';

export const Section = styled.div`
  ${(props) =>
    props.active === 'active' ? `display: flex;` : `display: none;`};
`;
