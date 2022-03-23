import styled from "styled-components";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <Container>
        <Header/>
        <>
        {children}
        </>
    </Container>
  )
}

export default Layout;

const Container = styled.div``