import "./App.css";
import Menu from './Menu';
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
const Home = lazy(() => import('./pages/home/home'));
const UsuarioCon = lazy(() => import('./cruds/usuarios/UsuarioCon'));

function App() {
  return (
  <BrowserRouter >
  <Menu/>
  <Suspense fallback={<div>Carregando ... </div>}>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/usuario" element={<UsuarioCon />} />
  </Routes>
  </Suspense>
  </BrowserRouter >
  );
 }
export default App;
