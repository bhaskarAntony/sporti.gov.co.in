import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Building2, Calendar, Users, Bed, Lock } from 'lucide-react';

const BookingConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock booking data based on the provided example
  const booking = {
    applicationNo: "10829cfd3",
    checkIn: "2024-11-02T16:47:00.000Z",
    checkOut: "2024-11-10T16:47:00.000Z",
    email: "bhaskarbabucm6@gmail.com",
    noRooms: "1",
    officerCadre: "none",
    officerDesignation: "q",
    phoneNumber: "9606729320",
    roomType: "Standard",
    serviceName: "Room Booking",
    serviceType: "Officers from Karnataka State",
    sporti: "SPORTI-1",
    status: "pending",
    totalCost: "6400",
    username: "me"
  };

  const handleConfirm = () => {
    navigate(`/payment/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Booking Confirmation</h1>
            <Link 
              to="/admin/login"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm bg-white/10 px-3 py-1.5 rounded-lg"
            >
              <Lock className="w-4 h-4" />
              <span>Admin Login</span>
            </Link>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Building2 className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-500">Building</p>
                  <p className="font-medium">{booking.sporti}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-500">Check-in</p>
                  <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-500">Service Type</p>
                  <p className="font-medium">{booking.serviceType}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Bed className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-500">Room Type</p>
                  <p className="font-medium">{booking.roomType}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="text-2xl font-bold">₹{booking.totalCost}</p>
                </div>
                <button
                  onClick={handleConfirm}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;