import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collection/collection.page.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";
import "./shop-page.styles.scss";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Switch>
					<Route
						exact
						path={`${match.path}`}
						component={CollectionsOverviewContainer}
					/>
					<Route
						path={`${match.path}/:collectionId?`}
						component={CollectionPageContainer}
					/>
				</Switch>
			</div>
		);
	}
}
// const mapStateToProps = createStructuredSelector({
// })
const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
