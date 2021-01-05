import "./collection.styles.scss";

import React from "react";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { collectionId } = props.match.params;
  const newState = {
    collection: selectCollection(collectionId)(state),
  };
  return newState;
};

export default connect(mapStateToProps)(CollectionPage);
