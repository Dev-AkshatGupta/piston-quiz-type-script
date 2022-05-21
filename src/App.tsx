import { NavigationBar } from "./Components/index";
import QuestionPage from "./Pages/QuestionsPage/QuestionPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CategoryPage, {
  CategoryContainer,
} from "./Pages/CategoryPage/CategoryPage";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import { db, auth } from "./fireBase";
import { Routes, Route } from "react-router-dom";
import LogInForm from "Components/Authentication/LogInForm";
import SignUpForm from "Components/Authentication/SignUpForm";
import ResultsPage from "Pages/ResultsPage/ResultsPage";
import PrivateRoute from "Components/CustomRoutes/PrivateRoute";
import RequireAuth from "Components/CustomRoutes/RequireAuth";
import RulesPage from "Pages/RulesPage/RulesPage";
function App() {
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
