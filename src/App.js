
import Main from './pages/Main';
import Resume from './pages/Resume';

import { Route, Routes } from 'react-router-dom';
import './styles.scss'

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>



    </>
  );
}

export default App;
