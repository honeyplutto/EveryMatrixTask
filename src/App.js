import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './Components/Sidebar/Elements/Page';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div style={{display: 'flex', flexDirectory: 'row'}}>
        <Sidebar />
        {/* <Navbar /> */}
      </div>
        
        {/* <Routes>
            <Route path='/page0' element = {<Page int={1}/>} />
            <Route path='/page1' element = {<Page int={2}/>} />
            <Route path='/page2' element = {<Page int={3}/>} />
            <Route path='/page3' element = {<Page int={4}/>} />
            <Route path='/page4' element = {<Page int={5}/>} />
            <Route path='/page5' element = {<Page int={6}/>} />
            <Route path='/page6' element = {<Page int={7}/>} />
            <Route path='/page7' element = {<Page int={8}/>} />
            <Route path='/page8' element = {<Page int={9}/>} />
            <Route path='/page9' element = {<Page int={10}/>} />
          </Routes>      */}

    </Router>
  );
}

export default App;