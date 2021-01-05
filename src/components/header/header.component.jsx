import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
} from "./header.styles";
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer className="option" to="/shop">
        SHOP
      </OptionLinkContainer>
      {/* <OptionLinkContainer className="option" to="/contact">
        CONTACT
      </OptionLinkContainer> */}
      {currentUser ? (
        <OptionLinkContainer
          as="div"
          className="option"
          onClick={() => auth.signOut()}
        >
          Log Out
        </OptionLinkContainer>
      ) : (
          <OptionLinkContainer className="option" to="/signin">
            SIGN IN
          </OptionLinkContainer>
        )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
