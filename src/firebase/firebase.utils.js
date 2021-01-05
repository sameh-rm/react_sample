import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBp99NwluzbjkNKZutIkOHA71tEYK1hX5c",
  authDomain: "crown-db-624c3.firebaseapp.com",
  databaseURL: "https://crown-db-624c3.firebaseio.com",
  projectId: "crown-db-624c3",
  storageBucket: "crown-db-624c3.appspot.com",
  messagingSenderId: "1078912152583",
  appId: "1:1078912152583:web:95f54b666b2702e515a6a2",
  measurementId: "G-3XZSHS7ZS5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const convertedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return convertedCollection.reduce((prevValue, collection) => {
    prevValue[collection.title.toLowerCase()] = collection;
    return prevValue;
  }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;
