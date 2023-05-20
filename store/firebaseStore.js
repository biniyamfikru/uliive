import { create } from 'zustand';

export const useFirebaseStore = create((set, get) => ({
    auth: null,
    firestore: null,
    analytics: null,
    setAuth: (val) => set({ auth: val }),
    // setActiveNavigationIndex: (value) => set(() => ({ activeNavigationIndex: value })),
    setFirestore: (val) => { set({ auth: val }) },
    setAnalytics: (val) => { set({ analytics: val }) },
}))