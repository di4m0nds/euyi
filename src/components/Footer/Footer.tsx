import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 p-8 text-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        </motion.div>

        <motion.div
          whileFocus={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.7 }}
          tabIndex={0}
          className="mb-8"
        >
          <div className="flex items-center">
            <FiPhone className="text-orange-200 mr-2" />
            <span>+52 984 492 1756 (WhatsApp)</span>
          </div>
        </motion.div>

        <motion.div
          whileFocus={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.7 }}
          tabIndex={0}
          className="mb-8"
        >
          <div className="flex items-center">
            <FiInstagram className="text-orange-200 mr-2" />
            <a
              href="https://www.instagram.com/eugenia_silvestri/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Eugenia Silvestri
            </a>
          </div>
        </motion.div>

        <motion.div
          whileFocus={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.7 }}
          tabIndex={0}
          className="mb-8"
        >
          <div className="flex items-center">
            <FiMail className="text-orange-200 mr-2" />
            <span>eugeniafotografia.2024@gmail.com</span>
          </div>
        </motion.div>

        <motion.div
          whileFocus={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.7 }}
          tabIndex={0}
          className="mb-8"
        >
          <div className="flex items-center text-orange-200">
            <span>📍 Playa del Carmen, México 🇲🇽</span>
          </div>
        </motion.div>

        <motion.div
          whileFocus={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.9 }}
          tabIndex={0}
        >
            <p className="text-sm font-light px-2 md:px-10 py-8 text-gray-200 leading-7">
              Soy fotógrafa profesional especializada en la creación de recuerdos excepcionales. Desde momentos íntimos hasta eventos vibrantes, cada captura es una obra maestra que perdurará en el tiempo.
              <p className="text-2xl">
                📸 
              </p>
            </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
