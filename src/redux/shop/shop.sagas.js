import { call, put, takeLatest } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
	fetchCollectionsFailure,
	fetchCollectionsSuccess,
} from "./shop.actions";

function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(fetchCollectionsSuccess(collectionMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCHING_COLLECTION_START,
		fetchCollectionsAsync
	);
}
