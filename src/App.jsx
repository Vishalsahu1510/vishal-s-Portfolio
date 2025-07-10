import { useEffect, useState } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HashLoader	 } from "react-spinners";
import './index.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
 
    const staticLoader = document.getElementById("static-loader");
    if (staticLoader) {
      staticLoader.style.display = "none";
    }
  }, 3000);

  return () => clearTimeout(timer);
}, []);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[hsl(227,47%,4%)] text-foreground transition-colors duration-300">
        <HashLoader	 size={100} color="hsl(250, 47%, 60%)"  />
      </div>
    );
  }

  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
