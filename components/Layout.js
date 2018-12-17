import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  font-family: sans-serif;
`;

const Layout = props => (
  <Wrapper>
    <Header />
    {props.children}
  </Wrapper>
);

export default Layout;
