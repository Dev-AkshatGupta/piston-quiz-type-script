import { NavigationBar } from "./Components/index";
import QuestionPage from "./Pages/QuestionsPage/QuestionPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import { db, auth } from "./fireBase";
import { Routes, Route } from "react-router-dom";
import LogInForm from "Components/Authentication/LogInForm";
import SignUpForm from "Components/Authentication/SignUpForm";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:quiz" element={<QuestionPage />} />
        <Route path="/authentication" element={<AuthenticationPage />}>
          <Route index element={<LogInForm />} />
          <Route path="signUp" element={<SignUpForm />} />
        </Route>
        <Route path="/questions" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
