import { useState, useEffect } from "react";
import "./App.css";
import Login from "./page/Login";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(
      document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*\\=\s*([^;]*).*$)|^.*$/,
        "$1"
      )
    );
  }, []); // Empty dependency array ensures the effect runs only once

  console.log(token);
  console.log(document.cookie.includes("token"));

  return (
    <>
      <div className="App">
        {document.cookie.includes("token") ? (
          <div>
            <h2>Logged in</h2>
            <p>Token: {token}</p>

            <button
              onClick={() => {
                document.cookie =
                  "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                setToken("");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default App;
