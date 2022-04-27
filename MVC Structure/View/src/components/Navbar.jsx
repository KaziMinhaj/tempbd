import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../App";
import { authenticaiton } from "../Config/firebase-config";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const { loginState } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = loginState;
  const { orderState } = useContext(UserContext);
  const [orders, setOrders] = orderState;

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authenticaiton, provider)
      .then((re) => {
        setLoggedInUser({
          name: re.user.displayName,
          email: re.user.email,
          photoURL: re.user.photoURL,
          isSignedIn: true,
        });
        console.log(re, re.user.displayName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = () => {
    setLoggedInUser({
      name: null,
      email: null,
      photoURL: null,
      isSignedIn: false,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              {/* <HomeOutlined /> */}
              HOME
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/productlist"
            >
              MENU
            </Link>
          </MenuItem>
        </Left>
        <Center>
          <Logo>CLOUD KITCHEN BD.</Logo>
        </Center>
        <Right>
          {loggedInUser.isSignedIn ? (
            <>
              <MenuItem>
                <img style={{ width: 30 }} src={loggedInUser.photoURL} alt="" />
              </MenuItem>
              <MenuItem>{loggedInUser.name.toUpperCase()}</MenuItem>
            </>
          ) : null}
          {loggedInUser.isSignedIn ? (
            <MenuItem onClick={signOut}>SIGN OUT</MenuItem>
          ) : (
            <MenuItem onClick={signInWithGoogle}>GOOGLE SIGN IN</MenuItem>
          )}

          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
              <Badge badgeContent={orders.count} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
