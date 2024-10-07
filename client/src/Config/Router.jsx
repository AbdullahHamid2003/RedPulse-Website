import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../Screens/home';
import DonateBlood from '../Screens/donate-Blood';
import DonateMoney from '../Screens/donate-Money';
import NeedBlood from '../Screens/need-Blood';
import SampleCollection from '../Screens/sample-Collection';
import HostBloodDrive from '../Screens/host-Blood-Drive';

export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/donate-blood" element={<DonateBlood />} />
                    <Route path="/donate-money" element={<DonateMoney />} />
                    <Route path="/need-blood" element={<NeedBlood />} />
                    <Route path="/sample-collection" element={<SampleCollection />} />
                    <Route path="/host-blood-drive" element={<HostBloodDrive />} />
                </Routes>
            </Router>
        </>
    )
}