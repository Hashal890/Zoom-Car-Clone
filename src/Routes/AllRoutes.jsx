import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import FleetPolicies from "./FleetPolicies";
import HostPolicies from "./HostPolicies";
import HelpAndSupport from "./HelpAndSupport";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fleetpolicy" element={<FleetPolicies />} />
        <Route path="/hostpolicy" element={<HostPolicies />} />
        <Route path="/helpandsupport" element={<HelpAndSupport />} />
      </Routes>
    </div>
  );
}
