import { motion } from "framer-motion";
const Transition = (OgComponent) => {
  return (
    <>
      <OgComponent />
      <motion.div className="slide-in" initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exist={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}></motion.div>
      <motion.div initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exist={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }} className="slide-Out"></motion.div>
    </>
  );
};
export default Transition;
