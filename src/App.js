import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyForm from "./screens/MyForm";
import InstituteDashboard from "./screens/InstituteDashboard";
import Signup from "./screens/signup";
import Login from "./screens/login";
import MyDashboard from "./screens/MyDashboard";
import StudentDashboard from "./screens/StudentDashboard";
import AdminDashboard from "./screens/AdminDashboard";
import RegistrationControl from "./screens/RegistrationControl";
import { Result } from "./screens/Result";
import { UserScreen } from "./screens/UserScreen";
import { AddQuestions } from "./screens/AddQuestions";
import { UlmaScreen } from "./screens/UlmaScreen";
import { AddAnswers } from "./screens/AddAnswers";
import UlmaDashboard from "./screens/UlmaDasboard";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Product from "./screens/Product";
import CartScreen from "./screens/CartScreen";
import { InstituteForm } from "./screens/InstituteForm";
import { AddQuiz } from "./screens/AddQuiz";
import { Quiz } from "./screens/Quiz";
import { InstituteList } from "./screens/InstituteList";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="instituteDashboard/*"
              element={<InstituteDashboard />}
            />
            <Route path="studentDashboard/*" element={<StudentDashboard />} />
            <Route path="adminDashboard/*" element={<AdminDashboard />} />
            <Route path="form" element={<MyForm />} />
            <Route path="instForm" element={<InstituteForm />} />
            <Route path="instlist" element={<InstituteList />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="myDashboard" element={<MyDashboard />} />
            <Route path="result" element={<Result />} />
            <Route path="addQuiz" element={<AddQuiz />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="userScr" element={<UserScreen />} />
            <Route path="addQues" element={<AddQuestions />} />
            <Route path="ulmaDashboard/*" element={<UlmaDashboard />} />
            <Route path="/" element={<Product />} />
            <Route path="cart" element={<CartScreen />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
