import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContainer } from "./styles/GlobalComponents";
import Hero from "./components/Hero/Hero";
import NewUser from "./components/UpdateUser/NewUser";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./actions/posts";
import EditUser from "./components/UpdateUser/EditUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <MainContainer>
        <ToastContainer position="top-center" />
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/register" element={<NewUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
