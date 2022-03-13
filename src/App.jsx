import './styles/App.css';
import {Circle} from './componenets/Circle';
import{Footer} from './componenets/Footer';
import {motion} from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.div whileHover={{scale:0.8}} animate={{ y: 200}}
    >
      <div className="Menu">
        <h1>Mobi</h1>
        <Circle p="Mobi" style={{background: 'blue'}}/>
        <Circle p="Mobi" style={{background: 'blue'}}/>
      </div>
      </motion.div>
      <Footer/>
    </div>
  );
}

export default App;
