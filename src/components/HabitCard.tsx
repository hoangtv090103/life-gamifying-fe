import React from "react";
import HabitModal from "../modals/HabitModal";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";

interface HabitCardProps {
  habit: {
    id: number;
    name: string;
    description: string;
    difficulty: string; // Assuming Difficulty is a string
    frequency: string; // Assuming Frequency is a string
    success: number;
    failure: number;
  };
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onRequestClose = () => {
    setIsOpen(false);
    console.log("Requesting to close");
  };

  const [success, setSuccess] = React.useState(habit.success);
  const [failure, setFailure] = React.useState(habit.failure);

  console.log("HabitCard", habit);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSuccess = async () => {
    console.log("Success clicked");
    setSuccess(success + 1);
    try {
      await axios.put(
        `api/v1/habits/${habit.id}`,
        {
          success: success + 1,
        },
        {
          headers: {
            Authorization: document.cookie.replace(
              /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            ),
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleFailure = async () => {
    console.log("Failure clicked");
    setFailure(failure + 1);
    try {
      await axios.put(
        `api/v1/habits/${habit.id}`,
        {
          failure: failure + 1,
        },
        {
          headers: {
            Authorization: document.cookie.replace(
              /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            ),
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-md md:min-w-[50%] hover:shadow-lg hover:cursor-pointer">
        <p className="ml-4" onClick={openModal}>
          {habit.name}
        </p>
        <div className="flex items-center">
          <button
            className="flex justify-center items-center gap-1"
            onClick={handleSuccess}
          >
            <FaPlus className="mr-2 text-green-500" />
          </button>
          <p className="mr-4 text-green-500">{success}</p>

          <button
            className="flex justify-center items-center gap-1"
            onClick={handleFailure}
          >
            <p className="text-red-500">{failure}</p>
            <FaMinus className="mr-2 text-red-500" />
          </button>
        </div>
      </div>

      <HabitModal
        habit={habit}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      />
    </>
  );
};

export default HabitCard;
