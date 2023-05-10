import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from './pages/login.js'
import DashBoard from './pages/Dashboard'
import VaccineForm from './components/vaccineform'
import RegisteredPeople from './pages/peopledata.js'
import SentMailPeople from './pages/sentMailData.js'
import VaccinatedPeople from './pages/vaccinatedPeople.js'
import DEvaccine from './pages/managev.js'




function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/vaccineform" element={<VaccineForm />} />
        <Route path="/RegisteredPeople" element={<RegisteredPeople />} />
        <Route path="/recivedmailPeople" element={<SentMailPeople />} />
        <Route path="/vaccinatedPeople" element={<VaccinatedPeople />} />
        <Route path="/managev" element={<DEvaccine />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
