import {motion} from "framer-motion";
export const Circle = (props)  => (
    <motion.div whileHover={{scale: 1.2}}>
    <div className="circle" style={props.style}>
        <p>{props.p}</p>
    </div>

  </motion.div>);