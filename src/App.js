import React from "react";
import styled from "styled-components";
import "./App.css";
import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmsPage } from "./pages/FilmsPage";
import PlanetPage from "./pages/PlanetPage";
import SpeicesPage from "./pages/SpeicesPage";
import VehiclesPage from "./pages/VehiclesPage";
import PeoplePage from "./pages/PeoplePage";
import StarshipsPage from "./pages/StarshipsPage";
import { SidebarData } from "./Components/SidebarData";


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Films");
  
  
  return (
    <BrowserRouter>
      <Sidebar 
      categories={SidebarData} 
      setSelectedCategory={setSelectedCategory}
       />

      <MainContent>
        <Routes>
          <Route path="/films/*" element={<FilmsPage />} />
          {/* <Route path="/films/movies2" element={<Movies2/>} /> */}
          <Route path="/people/*" element={<PeoplePage/>} />
          <Route path="/species/*" element={<SpeicesPage/>} />
          <Route path="/starships/*" element={<StarshipsPage/>} />
          <Route path="/vehicles/*" element={<VehiclesPage/>} />
          <Route path="/planets/*" element={<PlanetPage/>} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </MainContent>
      
    </BrowserRouter>
  );
}

export default App;
const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;


