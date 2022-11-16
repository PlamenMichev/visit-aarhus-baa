import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const getFavouritesAsync = async (userId) => {
  const ref = collection(db, 'favourites');

  const q = query(ref, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const result = [];
  querySnapshot.forEach((doc) =>
    result.push({
      id: doc.id,
      placeId: doc.data().placeId,
      userId: doc.data().userId
    })
  );

  return result;
};

const addToFavouritesAsync = async (userId, placeId) => {
  await addDoc(collection(db, 'favourites'), {
    userId,
    placeId
  });
};

const removeFromFavouritesAsync = async (docId) => {
  await deleteDoc(doc(db, 'favourites', docId));
};

export { addToFavouritesAsync, getFavouritesAsync, removeFromFavouritesAsync };
