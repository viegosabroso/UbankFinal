import { useState, useEffect } from "react";
import { auth, db } from "../Clients/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Importa funciones de Firestore

interface UseAuth {
  currentUser: User | null;
  loading: boolean;
  register: (email: string, password: string, username: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuth = (): UseAuth => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

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
      throw new Error("Error al registrar el usuario");
    }
  };

  // Iniciar sesión
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Cerrar sesión
  const logout = async () => {
    await signOut(auth);
  };

  return {
    currentUser,
    loading,
    register,
    login,
    logout,
  };
};

export default useAuth;
