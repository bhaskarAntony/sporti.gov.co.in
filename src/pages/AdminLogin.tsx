import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, RefreshCw, CheckCircle } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptcha.toUpperCase() !== captcha) {
      setError('Invalid captcha code');
      generateCaptcha();
      setUserCaptcha('');
      return;
    }
    
    // Demo credentials
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
      generateCaptcha();
      setUserCaptcha('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-blue-600 px-6 py-8 text-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Captcha Verification
                </label>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="flex-1 bg-gray-100 p-3 rounded-lg text-center">
                    <span className="font-mono text-lg font-bold tracking-wider text-gray-700 select-none" style={{ fontFamily: 'monospace' }}>
                      {captcha}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="p-2 text-blue-600 hover:text-blue-700"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
                <input
                  type="text"
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter captcha code"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {isLoggedIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-xl font-bold mt-4">Welcome to SPORTI Admin Panel</h2>
            <p className="text-gray-600 mt-2">Choose where you want to go:</p>
            <div className="mt-4 space-y-3">
              <a
                href="https://sporti-memebrship-admin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Go to Lite Dashboard
              </a>
              <a
                href="https://www.sporti.ksp.gov.in/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Go to Admin Dashboard
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
