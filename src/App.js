import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./styles/GlobalComponents";
import Hero from "./components/Hero/Hero";
import NewUser from "./components/NewUser/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/register" element={<NewUser />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
