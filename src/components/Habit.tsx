import axios from "axios";
import React from "react";
import HabitCard from "./HabitCard";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaSpinner } from "react-icons/fa";
import HabitModal from "../modals/HabitModal";

const Habit: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
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

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/players/${localStorage.getItem("player_id")}/habits`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (response.status == 401) {
          navigate("/login");
        }

        setHabits(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = () => {
    console.log("Opening modal");
    setIsOpen(true);
  };

  const [habit, setHabit] = React.useState({
    id: 0,
    name: "",
    description: "",
    difficulty: "",
    frequency: "",
    success: 0,
    failure: 0,
  });

  return (
    <main className="flex flex-col flex-grow p-4 justify-center items-center">
      {/* Add habit button */}
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4"
      >
        <FaPlus className="inline-block" />
      </button>
      {isLoading ? (
        <FaSpinner className="animate-spin h-6 w-6 mx-auto" />
      ) : habits.length === 0 ? (
        <p className="text-center">Let's create some habits!</p>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* key: index */}
          {habits.map((habit, index) => (
            <HabitCard key={index} habit={habit} />
          ))}
        </div>
      )}
      <HabitModal
        habit={habit}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />{" "}
    </main>
  );
};

export default Habit;
