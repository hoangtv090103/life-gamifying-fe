import React from "react";

interface HabitCardProps {
  habit: {
    id: number;
    name: string;
  };
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-md">
      <div className="flex items-center">
        <button className={`p-2 rounded-full text-white`}>
          <i className="fas fa-plus"></i>
        </button>
        <p className="ml-4">{habit.name}</p>
      </div>
      <button className="p-2 rounded-full bg-gray-200">
        <i className="fas fa-minus"></i>
      </button>
    </div>
  );
};

export default HabitCard;
