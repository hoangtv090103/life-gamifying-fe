import "./App.css";
import Login from "./page/Login";

function App() {
  
  return (
    <>
      <div className="App">
        {document.cookie.includes("token") ? (
          <div>
            <h2>Logged in</h2>

            <button
              onClick={() => {
                document.cookie =
                  "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.reload();
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
