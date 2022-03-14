import {motion} from "framer-motion";
import styled from 'styled-components';
const Circle = ({className, p})  => (
    <motion.div whileHover={{scale: 1.2}}>
    <div className={className}>
        <p>{p}</p>
    </div>
  </motion.div>);

export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: green;
`;

export const StyledCircle = styled(Circle)`
margin: 20px;
height: 150px;
width: 150px;
border-radius: 50%;
background-color: ${props => props.backgroundColor};
display: flex;
justify-content: center;
align-items: center;
`;