import Header from "../components/Header";
import Footer from "../components/Footer";
import Habit from "../components/Habit";
import { useEffect, useState } from "react";
import axios from "axios";

const Main: React.FC = () => {
  const [player, setPlayer] = useState({
    name: "",
    level: 0,
    health: 0,
    exp: 0,
    user: {
      username: "",
    },
  });
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const fetchPlayer = async () => {
    try {
      const res = await axios.get(
        `/api/v1/players/${localStorage.getItem("player_id")}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setPlayer(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlayer();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header player={player} />

      <Habit />

      <Footer />
    </div>
  );
};

export default Main;
