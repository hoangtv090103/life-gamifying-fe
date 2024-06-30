import axios from "axios";
import React from "react";
import HabitCard from "./HabitCard";

const Habit: React.FC = () => {
  const [habits, setHabits] = React.useState<{ id: number; name: string }[]>(
    []
  );

  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/habits", {
          headers: {
            Authorization: token,
          },
        });
        setHabits(response.data);
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex-grow p-4">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </main>
  );
};

export default Habit;
