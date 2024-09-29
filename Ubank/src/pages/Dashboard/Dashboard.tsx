import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../Clients/firebase";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // El usuario está logueado, obtenemos los datos
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data()?.username || "");
        }
      } else {
        // El usuario no está logueado, redirigimos y mostramos un toast
        toast.error("Inicie sesión para acceder al Dashboard");
        navigate("/login"); // Redirigir a la página de login
      }
    });

    return () => unsubscribe(); // Limpiar suscripción
  }, [navigate]);

  // Función de logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Desloguear de Firebase
      navigate("/"); // Redirigir al Sign Up o página principal
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div>
      <Toaster /> {/* Componente de react-hot-toast para mostrar los mensajes */}
      <h2>Welcome, {username}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

