import './styles/App.css';
import {StyledCircle, Title} from './componenets/Circle';
import{Footer} from './componenets/Footer';
import { Grid } from './componenets/Grid';
import {motion} from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.div whileHover={{scale:0.8}} 
    >
      <div className="Main">
        <Title>Mob</Title>
      </div>
      </motion.div>
     <Grid>
        <StyledCircle p="Mobi" className="circle" backgroundColor="blue"/>
        <StyledCircle p="Mobi" className="circle" backgroundColor="blue"/>
        <StyledCircle p="Mobi" className="circle" backgroundColor="blue"/>
        <StyledCircle p="Mobi" className="circle" backgroundColor="blue"/>
        <StyledCircle p="Mobi" className="circle" backgroundColor="blue"/>
        <StyledCircle p="Mobi" className="circle" backgroundColor="blue"/>
        
     </Grid>
     
   
      
      <Footer/>
    </div>
  );
}

export default App;
