import React from "react";


import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer } from "./collection-item.styles";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer >
        <NameContainer >{name}</NameContainer>
        <PriceContainer >{price}$</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        inverted
        onClick={() => {
          addItemToCart(item);
        }}
      >
        Add To Cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
