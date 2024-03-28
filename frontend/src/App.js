import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Todos from './pages/Todos'
import Todo from './pages/Todo'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Todos/>} exact/>
          <Route path="/:id" element={<Todo/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;