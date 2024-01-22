import "./App.css";
import SignUp from "./pages/signup/signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/signin/signin";
import Posts from "./pages/posts/posts";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RequireAuth from "./authentication/requireAuth";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/" element={<SignUp />}></Route>
            <Route element={<RequireAuth />}>
              <Route path="/posts" element={<Posts />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
