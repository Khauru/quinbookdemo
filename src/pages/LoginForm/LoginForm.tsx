import React, {useState, useEffect, useCallback} from 'react';
import { motion } from 'framer-motion';

interface LoginFormProps {
  onClose: () => void; // Function to call when the form should be closed
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add authentication
    onClose();
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    
    const target = event.target as Element;
    if (target.id==="loginwindow") {
      onClose(); // close the form if the click is outside
    }
  }, [onClose])

  const formRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // remove the listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div id="loginwindow" className="login-form-overlay" ref={formRef}>
          
          <form onSubmit={handleSubmit} className="login-form">
              <h3>Anmeldung</h3>
              <div>
                  <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      required
                      />
              </div>

              <div>
                  <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                  />
              </div>

              <button type="submit">Login</button>
              {/*<button type="button" onClick={onClose}>Cancel</button>*/}
              <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
      </div>
    </motion.div>
  );
  
};

export default LoginForm;