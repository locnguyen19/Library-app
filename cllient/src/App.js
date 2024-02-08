
import './stylesheets/theme.css';
import './stylesheets/alignments.css'
import './stylesheets/custom-components.css';
import './stylesheets/sizes.css'
import './stylesheets/form-elements.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from './pages/Register/index.js'
import Login from './pages/Login/index.js'
import Home from './pages/Home/index.js'
import Profile from './pages/Profile/index.js'
import 'antd/dist/reset.css';
import BookDescription from "./pages/BookDescription";

function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />


          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
           <Route
            path="/book/:id"
            element={
              <ProtectedRoute>
                <BookDescription />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
