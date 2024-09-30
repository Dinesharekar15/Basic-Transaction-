import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard"
import { SignUp } from "./Pages/SignUp";
import { Signin } from "./Pages/SignIn";
import { SendMoney } from "./Pages/SendMoney";
import { ProtectedRoute } from "./Pages/ProtectedRoute";

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route
             path="/dashboard" 
             element={
              <ProtectedRoute>
                <Dashboard></Dashboard>
              </ProtectedRoute>}/>
            <Route 
             path="/send"
             element={
              <ProtectedRoute>
                <SendMoney/>
              </ProtectedRoute>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
