import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding-top: 20px;
  font-size: larger;
  display: flex;
  justify-content: flex-end;
`;

const HeaderNav = styled.nav`
  border-bottom: 1.5px solid rgb(0, 0, 0);
`

const HeaderLi = styled.li`
                text-decoration: none;
                display: inline-block;
                margin-right: 10px;
`

const HeaderUl = styled.ul`
              display: flex;
              list-style: none;
              width: 100%;
`

const HeaderLink = styled(Link)`
                  color: rgb(0, 0, 0);
                  text-decoration: none;
`

export { StyledHeader, HeaderNav, HeaderLi, HeaderUl, HeaderLink };
