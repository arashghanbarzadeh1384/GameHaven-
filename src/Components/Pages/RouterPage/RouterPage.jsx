import { Route, Routes } from "react-router-dom";
import RouterAdim from "./RouterAdim/RouterAdim";


const RouterPage = () => {
  return (
    <>
        
      <Routes>
        <Route path="/admin/*" element={<RouterAdim />} />
      </Routes>
    </>
  );
};

export default RouterPage;
