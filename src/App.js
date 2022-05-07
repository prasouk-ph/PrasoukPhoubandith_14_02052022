import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home/Home'
import Employees from './components/pages/Employees/Employees'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'


function App() {  
  return (
    <Router>
        <Routes>     
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;