import { create } from "zustand/react";
import { persist, createJSONStorage } from "zustand/middleware";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";

type userState = {
  isLoggedIn: boolean;
  hasAgreedToTerms: boolean;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
  loginAsAdmin: () => void;
  setTermsAccepted: () => void;
  resetAll: () => void;
};

export const useAuthStore = create(
  persist<userState>(
    (set) => ({
      isLoggedIn: false,
      isAdmin: false,
      hasAgreedToTerms: false,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false, isAdmin: false }),
      loginAsAdmin: () => set({ isAdmin: true, isLoggedIn: true }),
      setTermsAccepted: () => set({ hasAgreedToTerms: true }),
      resetAll: () => set({ isLoggedIn: false, isAdmin: false, hasAgreedToTerms: false }),
    }),

    {
      name: "mi-auth-store",
      storage: createJSONStorage(() => ({
        getItem,
        setItem,
        removeItem: deleteItemAsync
      }))
    }
  )
)