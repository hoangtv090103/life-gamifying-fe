import React from "react";
import HabitModal from "../modals/HabitModal";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";

interface HabitCardProps {
  habit: {
    id: number;
    name: string;
    description: string;
    difficulty: number; // Assuming Difficulty is a string
    frequency: number; // Assuming Frequency is a string
    success: number;
    failure: number;
  };
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onRequestClose = () => {
    setIsOpen(false);
  };

  const [success, setSuccess] = React.useState(habit.success);
  const [failure, setFailure] = React.useState(habit.failure);

  const openModal = () => {
    setIsOpen(true);
  };

  const token = localStorage.getItem("token");

  const handleSuccess = async () => {
    setSuccess(success + 1);
    try {
      await axios.put(
        `api/v1/habits/${habit.id}`,
        {
          success: success + 1,
        },
        {
          headers: {
            Authorization: token,
            player_id: localStorage.getItem("player_id"),
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleFailure = async () => {
    setFailure(failure + 1);
    try {
      await axios.put(
        `api/v1/habits/${habit.id}`,
        {
          failure: failure + 1,
        },
        {
          headers: {
            Authorization: token,
            player_id: localStorage.getItem("player_id"),
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const [isRemoving, setIsRemoving] = React.useState(false);
  const [touchStartX, setTouchStartX] = React.useState(0);
  const [touchEndX, setTouchEndX] = React.useState(0);
  const [showRemoveButton, setShowRemoveButton] = React.useState(false);

  const handleRemove = async () => {
    setIsRemoving(true);
    try {
      await axios.delete(`api/v1/habits/${habit.id}`, {
        headers: {
          Authorization: token,
          player_id: localStorage.getItem("player_id"),
        },
      });
      // Handle successful removal here
    } catch (error) {
      console.error(error);
      // Handle error here
    } finally {
      setIsRemoving(false);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.touches[0].clientX);
    const touchDistance = touchEndX - touchStartX;
    setShowRemoveButton(touchDistance < 0);
  };

  return (
    <>
      <div
        className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-md hover:shadow-lg hover:cursor-pointer w-full lg:w-2/3"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <p className="md:ml-4" onClick={openModal}>
          {habit.name}
        </p>
        <div className="flex w">
          {isRemoving ? (
            <p>Removing...</p>
          ) : (
            <>
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
              {showRemoveButton && (
                <button onClick={handleRemove}>
                  <FaTrash className="mr-2 text-red-500" />
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <HabitModal
        habit={habit}
        setHabit={null}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      />
    </>
  );
};

export default HabitCard;
