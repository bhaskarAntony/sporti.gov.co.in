import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RoomAllocation = () => {
  const { id } = useParams();
  const [selectedRoom, setSelectedRoom] = useState('');

  const roomData = {
    "SPORTI-1": {
      "GROUND FLOOR": {
        Standard: ["102", "103", "104", "105", "106"],
      },
      "FIRST FLOOR": {
        Standard: ["204", "205", "206", "207", "208", "209", "210", "211"],
        VIP: ["201", "202"],
        Family: ["203"],
      },
    },
    "SPORTI-2": {
      "GROUND FLOOR": {
        VIP: ["01", "02", "03"],
      },
      "FIRST FLOOR": {
        Standard: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114"],
      },
    },
  };

  const handleRoomSelect = (room: string) => {
    setSelectedRoom(room);
  };

  const handleConfirm = () => {
    if (selectedRoom) {
      // Handle room confirmation logic
      console.log(`Room ${selectedRoom} assigned to booking ${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Room Allocation</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(roomData["SPORTI-1"]).map(([floor, types]) => (
              <div key={floor} className="space-y-4">
                <h2 className="text-xl font-semibold">{floor}</h2>
                
                {Object.entries(types).map(([type, rooms]) => (
                  <div key={type} className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-700">{type}</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {rooms.map((room) => (
                        <button
                          key={room}
                          onClick={() => handleRoomSelect(room)}
                          className={`p-2 text-center rounded ${
                            selectedRoom === room
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          {room}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleConfirm}
              disabled={!selectedRoom}
              className={`px-6 py-2 rounded-lg ${
                selectedRoom
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Confirm Room Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomAllocation;