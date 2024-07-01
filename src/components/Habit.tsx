import axios from "axios";
import React from "react";
import HabitCard from "./HabitCard";
import { useNavigate } from "react-router-dom";

const Habit: React.FC = () => {
  const [habits, setHabits] = React.useState<
    {
      id: number;
      name: string;
      description: string;
      difficulty: string; // Assuming Difficulty is a string
      frequency: string; // Assuming Frequency is a string
      success: number;
      failure: number;
    }[]
  >([]);

  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/habits", {
          headers: {
            Authorization: token,
          },
        });

        if (response.status == 401) {
          navigate("/login");
        }

        setHabits(response.data);
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex-grow p-4">
      {/* Check if there are habits */}
      {habits.length === 0 ? (
        <p className="text-center">Let's create some habits!</p>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* key: index */}
          {habits.map((habit, index) => (
            <HabitCard key={index} habit={habit} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Habit;
