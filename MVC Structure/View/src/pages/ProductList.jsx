import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Meals</Title>
      <Products/>
     {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default ProductList;
