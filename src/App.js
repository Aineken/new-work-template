import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContainer } from "./styles/GlobalComponents";
import Hero from "./components/Hero/Hero";
import NewUser from "./components/UpdateUser/NewUser";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "./actions/posts";
import EditUser from "./components/UpdateUser/EditUser";

function App() {
  const [newId, setNewId] = useState(11);
  const [currentId, setCurrentId] = useState(0);
  const [firstLog, setFirstLog] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstLog) {
      dispatch(fetchPosts());
      setFirstLog(false);
    }
  }, [firstLog, dispatch]);

  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Hero setCurrentId={setCurrentId} />}
          />
          <Route
            path="/register"
            element={<NewUser newId={newId} setNewId={setNewId} />}
          />
          <Route
            path="/edit"
            element={
              <EditUser currentId={currentId} setCurrentId={setCurrentId} />
            }
          />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
