import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Question from './question';
import Relationship from './relationship';
import Start from './start';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/question" element={<Question />} />
      <Route path="/relationship" element={<Relationship />} />

      </Routes>
    </Router>
  );
}

export default App;
