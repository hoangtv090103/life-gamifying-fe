import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", {
        username,
        password,
      });
      const data = res.data;

      setToken(data.token);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  console.log(username, password, token);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            <button onClick={login} disabled={loading}>
              Login
            </button>
          </p>
          <p>{token}</p>
          <p>
            <button
              onClick={async () => {
                try {
                  const response = await axios.get("/api/v1/habits", {
                    headers: {
                      Authorization: `${token}`,
                    },
                  });
                  const data = response.data;

                  console.log(data);
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Get Habits
            </button>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
