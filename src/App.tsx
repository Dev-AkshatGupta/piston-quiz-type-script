import { NavigationBar } from "./Components/index";
import QuestionPage from "./Pages/QuestionsPage/QuestionPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import { Routes, Route } from "react-router-dom";
import LogInForm from "Components/Authentication/LogInForm";
import SignUpForm from "Components/Authentication/SignUpForm";
import ResultsPage from "Pages/ResultsPage/ResultsPage";
import PrivateRoute from "Components/CustomRoutes/PrivateRoute";
import RequireAuth from "Components/CustomRoutes/RequireAuth";
import { useEffect } from "react";
import { useAppDispatch } from "Redux/hooks";
import {userChecker} from "Redux/Reducers/AuthSlice";

function App() {
  const dispatch=useAppDispatch();
  useEffect(()=>{
    dispatch(userChecker());
  })
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/authentication" element={<AuthenticationPage />}>
            <Route index element={<LogInForm />} />
            <Route path="signUp" element={<SignUpForm />} />
          </Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/:category" element={<CategoryPage />}>
          </Route>
            <Route path="/:category/:quiz" element={<QuestionPage />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/result" element={<ResultsPage />} />
        </Route>
      </Routes>
      <div className="divider-2"></div>
    </div>
  );
}

export default App;
