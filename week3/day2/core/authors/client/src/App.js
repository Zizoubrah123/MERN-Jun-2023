import './App.css';
import {Route, Routes} from 'react-router-dom'
import AuthorForm from './component/authorForm';
import Main from './component/main';
import Update from './component/update';
import Error from './component/Error';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Main/>} />
        <Route path='/author/create' element={<AuthorForm/>}/>
        <Route path="/author/edit/:id" element={<Update/>}/>
        <Route path='/author/edit'element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
