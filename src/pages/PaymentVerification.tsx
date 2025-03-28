import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle } from 'lucide-react';

const PaymentVerification = () => {
  const [name, setName] = useState('');
  const [utrNumber, setUtrNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {!submitted ? (
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-purple-600 px-6 py-4">
              <h1 className="text-2xl font-bold text-white text-center">Payment Verification</h1>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="bg-purple-50 rounded-lg p-4 flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-purple-700">
                  Please enter your details and UTR number for payment verification. 
                  Your booking will be confirmed after verification.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    UTR Number
                  </label>
                  <input
                    type="text"
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Enter UTR number from your payment"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Verification
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Submitted Successfully!</h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-gray-600">
                Your booking and payment will be verified within 24 working hours. 
                You will receive a confirmation email once verified.
              </p>
            </div>
            <button
              onClick={() => window.location.href="https://www.sporti.ksp.gov.in"}
              className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentVerification;