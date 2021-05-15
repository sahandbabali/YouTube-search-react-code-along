import React from "react";
import Navbar from "./components/navbar";
import Input from "./components/input";
import "./App.css";
import Sidebar from "./components/sidebar.jsx";
import Videodetails from "./components/videodetails.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="App container">
      <Navbar />

      <div id="inputbox" className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div id="inputwhiteback" className="col-md-6">
            <Input />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div id="pagecontent" class="container">
        <div class="row">
          <div class="col-md-8 card">
            <Videodetails />
          </div>
          <div class="col-md-4 card">
            <Sidebar />
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
}

export default App;
