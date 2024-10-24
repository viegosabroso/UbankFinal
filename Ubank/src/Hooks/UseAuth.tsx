import { useState, useEffect } from "react";
import emailjs from 'emailjs-com'


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


  const serviceID = "service_dn7ax1n"
  const templateID = "contact_form"

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (loading) setLoading(false); 
    });
    return unsubscribe;
  }, [loading]);

  // Registro de usuarios con username
  const register = async (email: string, password: string, username: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", result.user.uid), {
        username,
        email,
        Userdata: {
          Incomes: [{
          }],
          Expenses: [{
            ExpenseName: "",
            ExpenseAmount: 0,
            ExpenseDate: "",
            ExpenseCategory: "",
          }],
          Savings: [{
            SavingName: "",
            SavingAmount: 0,
            SavingGoal: 0,
            SavingDate: "",
          }],
          Premium: false,
          Finantialplan: "",
        }
        
      });

      
    } catch (error) {
      handleAuthError(error);
    }
    
    try {
      emailjs.init("d0AT7BktnKXvVjoKX")
      emailjs.send(serviceID, templateID, {
        username: username,
        email: email,
      } )
    } catch (error) {
      handleAuthError(error)
    }
  };

  // Iniciar sesión
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      handleAuthError(error);
    }
  };

  // Iniciar sesión con Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      const userDocRef = doc(db, "users", result.user.uid);
      const userSnapshot = await getDoc(userDocRef);
      if (!userSnapshot.exists()) {
        await setDoc(userDocRef, {
          username: result.user.displayName,
          email: result.user.email,
          Userdata: {
            Incomes: 0,
            Expenses: 0,
            Savings: 0,
          }
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

  const handleAuthError = (error: any) => {
  let errorMessage = "Error desconocido. Intente nuevamente.";
  if (error.code) {
    switch (error.code) {
      case 'auth/wrong-password':
        errorMessage = "Contraseña incorrecta. Por favor, verifique sus credenciales.";
        break;
      case 'auth/user-not-found':
        errorMessage = "Usuario no encontrado. Verifique su email.";
        break;
      case 'auth/too-many-requests':
        errorMessage = "Demasiados intentos fallidos. Por favor, intente más tarde.";
        break;
      case 'auth/invalid-credential':
        errorMessage = "Las credenciales son inválidas. Asegúrese de que su email y contraseña sean correctos.";
        break;
      case 'auth/email-already-in-use':
        errorMessage = "El correo electrónico ya está en uso. Intente con otro.";
        break;
      case 'auth/invalid-email':
        errorMessage = "El correo electrónico no es válido. Por favor, verifique.";
        break;
      case 'auth/operation-not-allowed':
        errorMessage = "El registro con correo electrónico está deshabilitado. Por favor, contacte al soporte.";
        break;
      case 'auth/weak-password':
        errorMessage = "La contraseña es muy débil. Intente con una contraseña más fuerte.";
        break;
      default:
        errorMessage = "Error al iniciar sesión. Intente nuevamente.";
        break;
    }
  }
  throw new Error(errorMessage); // Lanza un error con el mensaje correspondiente
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

