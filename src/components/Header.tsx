import React from "react";

interface HeaderProps {
  player: {
    name: string;
    level: number;
    health: number;
    exp: number;
    user: {
      username: string;
    };
  };
}

const Header: React.FC<HeaderProps> = ({ player }) => {
  return (
    <header className="bg-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full"
          src="https://via.placeholder.com/150"
          alt="avatar"
        />
        <div className="ml-4">
          <h1 className="text-xl font-rpg">{player.user.username}</h1>
          <p className="text-sm">Level {player.level}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <div className="text-red-500">{player.health} / 100</div>
          <div className="text-xs">Health</div>
        </div>
        <div className="text-center">
          <div className="text-yellow-500">{player.exp} / 100</div>
          <div className="text-xs">Experience</div>
        </div>
        {/* <div className="text-center">
          <div className="text-blue-500">
            {player.level < 10 ? (
              <div>Unlocks at level 10</div>
            ) : (
              <div>Mana {player}</div>
            )}
          </div>
          <div className="text-xs">Mana</div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
