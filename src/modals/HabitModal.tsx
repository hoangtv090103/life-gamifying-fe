import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

interface Habit {
  name: string;
  description: string;
  difficulty: string; // Assuming Difficulty is a string
  frequency: string; // Assuming Frequency is a string
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
          <h2 className="text-2xl font-semibold">{habit.name}</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">{habit.description}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Difficulty:</strong> {habit.difficulty}
          </p>
          <p className="text-gray-700">
            <strong>Frequency:</strong> {habit.frequency}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-green-500">
            <strong>Success:</strong> {habit.success}
          </p>
          <p className="text-red-500">
            <strong>Failure:</strong> {habit.failure}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default HabitModal;
