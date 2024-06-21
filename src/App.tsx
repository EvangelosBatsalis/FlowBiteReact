// import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FlNavBar } from './component/FlNavBar';

// Import your pages or create simple components for now
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const Success = () => <div>Success Page</div>;
// const Appointment = () => <div>Appointment Page</div>;
const Contact = () => <div>Contact Page</div>;

export default function App() {
  return (
    <Router>
      <FlNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/success" element={<Success />} />
        {/* <Route path="/appointment" element={<Appointment />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}