import { FaBars, FaCog, FaGift, FaTasks, FaTrophy } from "react-icons/fa";

const BottomMenu: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around py-2 lg:hidden">
      <button className="flex flex-col items-center focus:outline-none">
        <FaBars className="text-2xl" />
        <span className="text-sm">Habits</span>
      </button>
      <button className="flex flex-col items-center focus:outline-none">
        <FaTasks className="text-2xl" />
        <span className="text-sm">Dailies</span>
      </button>
      <button className="flex flex-col items-center focus:outline-none">
        <FaTrophy className="text-2xl" />
        <span className="text-sm">Quests</span>
      </button>
      <button className="flex flex-col items-center focus:outline-none">
        <FaGift className="text-2xl" />
        <span className="text-sm">Rewards</span>
      </button>
      <button className="flex flex-col items-center focus:outline-none">
        <FaCog className="text-2xl" />
        <span className="text-sm">Settings</span>
      </button>
    </div>
  );
};

export default BottomMenu;
