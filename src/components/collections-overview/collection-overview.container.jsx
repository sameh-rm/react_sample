import { compose } from 'redux';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collections-overview.component';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionPageContainer