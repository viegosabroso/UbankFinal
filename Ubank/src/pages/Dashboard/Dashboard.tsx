import React, { useEffect, useState } from "react"; 
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../Clients/firebase";
import useAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom"; 
import { signOut } from "firebase/auth"; 


const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const fetchUsername = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data()?.username || ""); // Obtén el username desde Firestore
        }
      }
    };
    fetchUsername();
  }, [currentUser]);

  // Función de logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Desuscribirse de Firebase
      navigate("/"); // Redirigir al Sign Up
    } catch (error) {
      console.error("Error logging out: ", error); // Manejar errores
    }
  };

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <button onClick={handleLogout}>Logout</button> {/* Botón de logout */}
    </div>
  );
};

export default Dashboard;
