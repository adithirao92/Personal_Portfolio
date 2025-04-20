import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-content">
        <motion.div
          className="profile-image-container"
          whileHover={{ scale: 1.05 }}
        >
          {/* Replace with your actual image */}
          <div className="profile-image-placeholder"></div>
        </motion.div>
        
        <motion.div 
          className="header-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1>Adithi P Rao</h1>
          <h2>Computer Science Engineer | Cloud & Web Developer</h2>
          <p>Building innovative solutions with a passion for technology</p>
          <SocialLinks />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;