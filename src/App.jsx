import { Routes, Route } from 'react-router-dom';
import ETo from './pages/eto.jsx';
import ETCC from './pages/etcc.jsx';
import Ko from './pages/ko.jsx';
import Dashboard from './pages/dashboard'; // Adicione esta linha

function App() {
  return (
    <Routes>
      {/* Mude a rota raiz para o Dashboard */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Opcional */}
      <Route path="/eto" element={<ETo />} />
      <Route path="/etcc" element={<ETCC />} />
      <Route path="/ko" element={<Ko />} />
      {/* Remova a rota de placeholder do dashboard */}
      {/* <Route path="/dashboard" element={<div>Dashboard - Em desenvolvimento</div>} /> */}
    </Routes>
  );
}

export default App;