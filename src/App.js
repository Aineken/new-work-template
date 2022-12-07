import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./styles/GlobalComponents";
import Hero from "./components/Hero/Hero";
import NewUser from "./components/NewUser/NewUser";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "./actions/posts";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Hero setCurrentId={setCurrentId} />}
          />
          <Route
            path="/register"
            element={
              <NewUser currentId={currentId} setCurrentId={setCurrentId} />
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
