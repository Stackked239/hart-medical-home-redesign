import { motion } from "framer-motion";

const HeartbeatIcon = ({ className = "" }: { className?: string }) => {
  return (
    <motion.svg
      viewBox="0 0 100 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.path
        d="M0 20 L25 20 L35 5 L50 35 L60 10 L70 25 L100 20"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </motion.svg>
  );
};

export default HeartbeatIcon;
