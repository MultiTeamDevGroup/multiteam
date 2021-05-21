const firebase = firebase;
const db = firebase.firestore();

const dcid = "223853152510803972";

const ref = db.collection('dcusers').doc('dcid');

ref.get().then(doc => {
    console.log(doc.data());
})