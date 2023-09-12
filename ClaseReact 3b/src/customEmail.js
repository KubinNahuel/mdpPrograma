import React from 'react'
import {db} from './firebase.js'
import {collection, addDoc} from 'firebase/firestore'
export default async function CustomEmail(email,subject,body) {
 const collectionRef= collection(db,'mail')
 const content= {
    to: email,
message: {
  subject: subject,
  text: body,
  html: `${body}`
}
}
console.log("hecho")
return await addDoc(collectionRef,content);
}
