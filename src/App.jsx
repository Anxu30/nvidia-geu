import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Infrastructure from "./pages/Infrastructure";
import Publications from "./pages/Publications";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import UsageCharges from "./pages/UsageCharges";
import JobSubmission from "./pages/JobSubmission";
import SoftwareResources from "./pages/SoftwareResources";
import RemoteVisualization from "./pages/RemoteVisualization";
import AdminNotes from "./pages/AdminNotes";
// import Login from "./pages/Login";
import RequestService from "./pages/RequestService";
import RequestAccess from "./pages/RequestAccess";
import BestPractices from "./pages/BestPractices";
import ManualAccess from "./pages/ManualAccess";
import "./index.css";


function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Navbar />

      <div className="pageContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/usage-charges" element={<UsageCharges />} />
          <Route path="/job-submission" element={<JobSubmission />} />
          <Route path="/software-resources" element={<SoftwareResources />} />
          <Route path="/remote-visualization" element={<RemoteVisualization />} />
          <Route path="/admin-notes" element={<AdminNotes />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/request-service" element={<RequestService />} />
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/manual-access" element={<ManualAccess />} />
          <Route path="/software-resources" element={<SoftwareResources />} />

        </Routes> {/* ✅ Added closing tag here */}
      </div>

      <Footer />
    </Router>
  );
}

export default App;
