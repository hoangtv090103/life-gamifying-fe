import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

interface Habit {
  id: number;
  name: string;
  description: string;
  difficulty: number; // Assuming Difficulty is a string
  frequency: number; // Assuming Frequency is a string
  success: number;
  failure: number;
}

interface HabitModalProps {
  habit: Habit | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const HabitModal: React.FC<HabitModalProps> = ({
  habit,
  isOpen,
  onRequestClose,
}) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [difficulty, setDifficulty] = React.useState(0);
  const [frequency, setFrequency] = React.useState(0);
  const [success, setSuccess] = React.useState(0);
  const [failure, setFailure] = React.useState(0);

  const handleSave = async () => {
    const updatedHabit = {
      name: name,
      description: description,
      difficulty: difficulty,
      frequency: frequency,
      success: success,
      failure: failure,
    };

    // if (habit?.id !== 0 && habit?.id !== undefined) {
    //   // Update habit
    //   await axios.put(`api/v1/habits/${habit.id}`, updatedHabit, {
    //     headers: {
    //       Authorization: document.cookie.replace(
    //         /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    //         "$1"
    //       ),
    //     },
    //   });
    // } else {
    // Create habit
    await axios.post(
      `api/v1/habits`,
      {
        ...updatedHabit,
        player_id: parseInt(localStorage.getItem("player_id")!),
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
    //   }
    onRequestClose();
  };

  if (!habit) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Habit Details"
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-2xl font-semibold">
            {habit.name || (
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Habit Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            )}
          </h2>
          <button
            onClick={onRequestClose}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            {habit.description || (
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Habit Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            )}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Difficulty:</strong>{" "}
            {habit.difficulty || (
              <input
                type="number"
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(parseInt(e.target.value))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            )}
          </p>
          <p className="text-gray-700">
            <strong>Frequency:</strong>{" "}
            {habit.frequency || (
              <input
                type="number"
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(parseInt(e.target.value))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-green-500">
            <strong>Success:</strong>{" "}
            {habit.success || (
              <input
                type="number"
                id="success"
                value={success}
                onChange={(e) => setSuccess(parseInt(e.target.value))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            )}
          </p>
          <p className="text-red-500">
            <strong>Failure:</strong>{" "}
            {habit.failure || (
              <input
                type="number"
                id="failure"
                value={failure}
                onChange={(e) => setFailure(parseInt(e.target.value))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            )}
          </p>
        </div>

        <button
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 mt-4"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default HabitModal;
