import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
	auth,
	createUserProfileDocument /*addCollectionAndDocuments */,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component.jsx";
import AuthenticationPage from "./pages/authentication-page/authentication-page.components";
import CheckOutPage from "./pages/checkout-page/checkout-page.pages";

import Header from "./components/header/header.component";
import { selectCollectionForPreview } from "./redux/shop/shop.selectors";
class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
			// add collections to firebase database
			// 	addCollectionAndDocuments(
			// 		"collections",
			// 		collectionsArray.map(({ title, items }) => ({
			// 			title: title,
			// 			items: items,
			// 		}))
			// 	);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;
		return (
			<div className="App">
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckOutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? Redirect("/") : <AuthenticationPage />
						}
					/>
				</Switch>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArray: selectCollectionForPreview,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
