'use client'

import React, { useEffect, useRef, useState } from 'react';



import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRouter } from 'next/navigation';
import { useFirebaseStore } from '@/store/firebaseStore';
import firebase, { analytics, auth, firestore } from '@/firebaseConfig';

const App = () => {
  const router = useRouter();
  // const [user] = useAuthState(auth);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in, redirect to the homepage
      router.push('/chatroom');
    } else router.push('/login')
  });

  // useEffect(() => {
  //   console.log({ user })
  //   router.push(user ? "/chatroom" : "/login");
  // }, [])

  return (
    <main className='flex-1 flex flex-col items-center justify-start'>
      <h1 className='font'>Welcome to ULIIVE</h1>
    </main>
  )
}



function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;