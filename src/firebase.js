import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
// import seedDatabase from './seed'

// import { getFirestore, collection, addDoc } from 'firebase/firestore'

//* Firebase project configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_CONFIG_API_KEY,
	authDomain: 'portfolio-a2d59.firebaseapp.com',
	projectId: 'portfolio-a2d59',
	storageBucket: 'portfolio-a2d59.appspot.com',
	messagingSenderId: '1012465917194',
	appId: '1:1012465917194:web:1e73ee5ebd97cb570d2ef3',
	measurementId: 'G-28LQPQKM3B',
}

const firebase = initializeApp(firebaseConfig)
const firebaseDb = getFirestore(firebase)
const firebaseStorage = getStorage()

const getAssetUrl = async (name) => {
	const assetRef = ref(firebaseStorage, `assets/${name}`)
	const res = await getDownloadURL(assetRef)
	return res
}

//! use only 1 time to load data to firestore
// seedDatabase(firebaseDb, collection, addDoc)
export { firebase, firebaseDb, collection, getDocs, getAssetUrl }
