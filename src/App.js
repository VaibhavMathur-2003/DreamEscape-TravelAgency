import "./App.css";
import About from "./components/About/About";
import HomePage from "./components/Home/HomePage";
import Staff from "./components/PlacesAndStaff/Staff";
import Places from "./components/PlacesAndStaff/Places";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/ContactUs/Contact";
import Carousal from "./components/Carousal/Carousal";
import Detail from "./components/Detail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./components/Weclome/Welcome";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome/>}/>
        <Route
          exact
          path="/homepage"
          element={
            <>
              <Navbar />
              <HomePage />
              <About />
              <Places />
              <Carousal />
              <Staff />
              <Contact />
            </>
          }
        />
        <Route
          exact
          path="/goa"
          element={
            <Detail
              image="https://picsum.photos/id/231/200/300"
              title="Goa Tour"
              price="$500"
            />
          }
        />
        <Route
          exact
          path="/kashmir"
          element={
            <Detail
              image="https://picsum.photos/id/235/200/300"
              title="Kashmir Tour"
              price="$450"
            />
          }
        />
        <Route
          exact
          path="/rajasthan"
          element={
            <Detail
              image="https://picsum.photos/id/243/200/300"
              title="Rajasthan Tour"
              price="$400"
            />
          }
        />
        <Route
          exact
          path="/ladakh"
          element={
            <Detail
              image="https://picsum.photos/id/242/200/300"
              title="Ladakh Tour"
              price="$400"
            />
          }
        />
        <Route
          exact
          path="/andaman"
          element={
            <Detail
              image="https://picsum.photos/id/250/200/300"
              title="Andaman Tour"
              price="$500"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
