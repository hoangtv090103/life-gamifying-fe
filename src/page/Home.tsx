import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1592194996308-7b0a5a78ba60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <header className="bg-black bg-opacity-50 p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Life Gamifying</h1>
        <p className="text-lg">
          Turn your life into a game and level up by completing your daily tasks
          and habits!
        </p>
      </header>

      <main className="flex-grow p-4 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Welcome Adventurer!</h2>
        <p className="mb-8">
          Start your journey by creating and completing tasks to gain experience
          and rewards.
        </p>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 font-bold"
            onClick={() => {
              console.log("Redirecting to /login");
              navigate("/login");
            }}
          >
            Get Started
          </button>
          <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 font-bold">
            Learn More
          </button>
        </div>
      </main>

      <footer className="bg-black bg-opacity-50 p-4 text-white text-center">
        <div className="flex justify-center space-x-4">
          <a href="#!" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="mt-4">&copy; 2024 Life Gamifying. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
