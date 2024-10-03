import { useState, useEffect } from "react";
import { auth, db } from "../Clients/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

interface UseAuth {
  currentUser: User | null;
  loading: boolean;
  register: (email: string, password: string, username: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>; // Nuevo método para Google Auth
  logout: () => Promise<void>;
}

const useAuth = (): UseAuth => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Suscribirse al estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (loading) setLoading(false); // Solo actualiza loading si es necesario
    });
    return unsubscribe;
  }, [loading]);

  // Registro de usuarios con username
  const register = async (email: string, password: string, username: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // Guarda el username en Firestore
      await setDoc(doc(db, "users", result.user.uid), {
        username,
        email,
      });
    } catch (error) {
      console.error("Error al registrar el usuario: ", error);
      throw new Error("Error al registrar el usuario");
    }
  };

  // Iniciar sesión
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      throw new Error("Error al iniciar sesión");
    }
  };

  // Iniciar sesión con Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      // Verifica si el usuario ya tiene un documento en Firestore y si no lo crea
      const userDocRef = doc(db, "users", result.user.uid);
      const userSnapshot = await getDoc(userDocRef);
      if (!userSnapshot.exists()) {
        await setDoc(userDocRef, {
          username: result.user.displayName,
          email: result.user.email,
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google: ", error);
      throw new Error("Error al iniciar sesión con Google");
    }
  };

  // Cerrar sesión
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
      throw new Error("Error al cerrar sesión");
    }
  };

  return {
    currentUser,
    loading,
    register,
    login,
    loginWithGoogle, // Retorna la función de login con Google
    logout,
  };
};

export default useAuth;

