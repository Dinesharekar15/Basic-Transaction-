import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard"
import { SignUp } from "./Pages/SignUp";
import { Signin } from "./Pages/SignIn";
import { SendMoney } from "./Pages/SendMoney";
function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/send" element={<SendMoney/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
