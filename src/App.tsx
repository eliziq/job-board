import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import JobBoard from "./pages/JobBoard";
import JobDetails from "./pages/JobDetails";

const App: FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<JobBoard />} />
          <Route path="/details/:id" element={<JobDetails/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
