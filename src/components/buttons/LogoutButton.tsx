import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = async () => {
    // Logout the user
    await axios.delete("/api/auth/logout", {
      headers: {
        Authorization: localStorage.getItem("token"),
        player_id: localStorage.getItem("player_id"),
      },
    });

    // Remove the token from the local storage
    localStorage.removeItem("token");
    // Remove the player_id from the local storage
    localStorage.removeItem("player_id");
    // Remove the player from the local storage
    localStorage.removeItem("player");

    // Redirect to the login page
    return navigate("/login");
  };

  return (
    <button
      onClick={logout}
      className="absolute top-0 right-0 m-4 bg-red-500 text-white px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
