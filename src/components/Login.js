import { Link } from "react-router-dom";
const Login = () => {
    



    return (
      <div className="flex items-center justify-center min-h-screen from-purple-600 via-indigo-500 to-indigo-200 bg-gradient-to-br">
        <div className="w-full max-w-lg px-5 py-8 mx-auto bg-white border rounded-lg shadow-2xl">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="text-lg font-semibold">&#128540; My Account</h3>
            <div>
              <label className="block py-1">Your email</label>
              <input
                type="email"
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
              <p className="text-sm mt-2 px-2 hidden text-gray-600">Text helper</p>
            </div>
            <div>
              <label className="block py-1">Password</label>
              <input
                type="password"
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
            </div>
            <div className="flex gap-3 pt-3 items-center">
              <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg text-white rounded-lg px-3 py-3 font-semibold shadow ring-1 ring-inset from-purple-600 via-indigo-500 to-indigo-200 bg-gradient-to-br">Login</button>
              {/* <a href="#">Forgot Password</a> */}
              <Link to="/">
              <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg text-white rounded-lg px-3 py-3 font-semibold shadow ring-1 ring-inset from-purple-600 via-indigo-500 to-indigo-200 bg-gradient-to-br">Back</button>
              </Link>
            </div>

          </div>
          
        </div>
      </div>
    );
  };
  
  export default Login;
  