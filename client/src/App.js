import "./App.css";
import Blog1 from "./pages/Ayazhan/blog1/Blog1";
import LoginPage from "./pages/loginPage/LoginPage";
import Main from "./pages/main/Main";
import OwnerPage from "./pages/ownerPage/OwnerPage";
import PersonalPage from "./pages/personalPage/PersonalPage";
import Service from "./pages/servicepage/Service";
import SitterSearch1 from "./pages/sitterSearch1/SitterSearch1";
import SitterSearch2 from "./pages/sitterSearch2/SitterSearch2";

function App() {
  return (
    <div className="App">
      <Main />
      {/*  <Service /> */}
      {/* <SitterSearch1 /> */}
      {/* <SitterSearch2 /> */}
      {/* <PersonalPage /> */}
      {/* <OwnerPage /> */}
      {/* <LoginPage /> */}
      <Blog1 />
    </div>
  );
}

export default App;
