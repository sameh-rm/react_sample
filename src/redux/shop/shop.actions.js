import ShopActionTypes from './shop.types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCHING_COLLECTION_START,
})

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCHING_COLLECTION_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCHING_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart())
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error)));
    }
}

