import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login3 = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch('http://10.125.121.222:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password: userPass
      }),
    })
    .then(res => {
      if (res.ok) {
        const auth = res.headers.get("Authorization");
        if (auth) {
          localStorage.setItem("token", auth);
          navigate('/');
        } else {
          alert("Authentication token not found");
        }
      } else {
        const errorMessage = res.json();
        alert(`Login failed: ${errorMessage}`);
      }
    })
    .catch(error => {
      console.error("An error occurred during login:", error);
      alert("An unexpected error occurred. Please try again.");
    });
  };
  useEffect(()=>{
    console.log(userName, userPass);
  },[userName, userPass])
  return (
    <div className="flex items-center justify-center min-h-screen from-purple-600 via-indigo-500 to-indigo-200 bg-gradient-to-br">
      <div className="w-full max-w-lg px-5 py-8 mx-auto bg-white border rounded-lg shadow-2xl">
        <div className="max-w-md mx-auto space-y-3">
          <h3 className="text-lg font-semibold">&#128540; My Account</h3>
          <div>
            <label className="block py-1">Your Name</label>
            <input
              type="Name"
              defaultValue={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
            />
          </div>
          <div>
            <label className="block py-1">Password</label>
            <input
              type="password"
              defaultValue={userPass}
              onChange={(e) => setUserPass(e.target.value)}
              className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
            />
          </div>
          <div className="flex gap-3 pt-3 items-center">
            <button
              onClick={handleLogin}
              className="border hover:border-indigo-600 px-4 py-2 rounded-lg text-white rounded-lg px-3 py-3 font-semibold shadow ring-1 ring-inset from-purple-600 via-indigo-500 to-indigo-200 bg-gradient-to-br"
            >
              Login
            </button>
            <Link to="/">
              <button
                className="border hover:border-indigo-600 px-4 py-2 rounded-lg text-white rounded-lg px-3 py-3 font-semibold shadow ring-1 ring-inset from-purple-600 via-indigo-500 to-indigo-200 bg-gradient-to-br"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login3;
