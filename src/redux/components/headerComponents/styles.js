import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 20px 0;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
`;

const HeaderNav = styled.nav`
  border-bottom: 1.5px solid rgb(0, 0, 0);
  padding-bottom: 15px;
  padding-right: 50px;
`
const GreetingContainer = styled.div`
  display: flex;
  padding-bottom: 30px;
  padding-right: 50px;
  padding-top: 30px;
  align-items: center;
  font-size: 16px;
`;

const Greeting = styled.div`
  padding-right: 15px;
  padding-left: 5px;
  font-size:1.5rem;
`;

const GreetingNickname = styled.div`
  font-weight: bold;
  font-size:1.5rem;
  color: rgb(76, 76, 198);
`;

const HeaderLi = styled.li`
                text-decoration: none;
                display: inline-block;
                padding-right: 15px;
`

const HeaderUl = styled.ul`
              display: flex;
              list-style: none;
              width: 100%;
`

const HeaderLink = styled(Link)`
                  color: rgb(0, 0, 0);
                  text-decoration: none;

                  &:hover {
                    color: rgb(180,180,180);
                  }
`

export { StyledHeader, GreetingContainer, Greeting, GreetingNickname, HeaderNav, HeaderLi, HeaderUl, HeaderLink };
