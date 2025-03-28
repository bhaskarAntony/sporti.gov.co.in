import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QrCode, IndianRupee } from 'lucide-react';
import qrcodeImage from './qr_code.png'

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePaymentDone = () => {
    navigate(`/payment-verification/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-green-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white text-center">Complete Your Payment</h1>
          </div>
          
          <div className="p-6 space-y-8">
            <div className="text-center">
              <p className="text-gray-600 text-lg">Scan QR code to pay</p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <IndianRupee className="w-6 h-6 text-green-600" />
                <p className="font-bold text-3xl text-green-600">6,400</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="border-4 border-green-600 rounded-2xl p-4 bg-white shadow-inner">
                <img src={qrcodeImage} alt="" className="w-56" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Payment Instructions:</h3>
                <ol className="list-decimal list-inside text-sm text-green-700 space-y-2">
                  <li>Open your UPI payment app</li>
                  <li>Scan the QR code above</li>
                  <li>Enter the amount: ₹6,400</li>
                  <li>Complete the payment</li>
                  <li>Save the UTR number for verification</li>
                </ol>
              </div>
              
              <button
                onClick={handlePaymentDone}
                className="w-full bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                I have completed the payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;