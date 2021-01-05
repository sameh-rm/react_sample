import { compose } from 'redux';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import CollectionPage from './collection.page';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionLoaded,
});

const CollectionPreviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPreviewContainer;