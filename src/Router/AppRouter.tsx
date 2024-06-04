
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spacificdata from "../components/Spacificdata";
import CardSection from "../components/CardSection";

const AppRouter = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CardSection/>}></Route>
            <Route path="/product-id/:id" element={<Spacificdata />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  
  export default AppRouter;