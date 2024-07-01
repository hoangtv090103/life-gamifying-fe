import Header from "../components/Header";
import Footer from "../components/Footer";
import Habit from "../components/Habit";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import BottomMenu from "../components/BottomMenu";

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
    if (localStorage.getItem("player")) {
      setPlayer(JSON.parse(localStorage.getItem("player")!));
      console.log("Player already in local storage");
      return;
    }
    try {
      const res = await axios.get(
        `/api/v1/players/${localStorage.getItem("player_id")}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log("Setting player in local storage");
      localStorage.setItem("player", JSON.stringify(res.data));
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
      <Sidebar />
      <BottomMenu />

      <Habit />

      <Footer />
    </div>
  );
};

export default Main;
