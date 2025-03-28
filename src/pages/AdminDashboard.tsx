import React, { useState } from 'react';
import { 
  BarChart, 
  Card, 
  Title, 
  Text,
  LineChart,
  DonutChart,
  AreaChart,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@tremor/react';
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock, 
  IndianRupee,
  Building,
  Menu,
  Home,
  Settings,
  LogOut,
  FileText,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  // Mock data for tables and charts
  const bookings = [
    { id: "B001", name: "Rajesh Kumar", date: "2024-03-20", amount: "₹6,400", status: "pending", utr: "UTR123456" },
    { id: "B002", name: "Priya Sharma", date: "2024-03-19", amount: "₹8,200", status: "approved", utr: "UTR789012" },
    { id: "B003", name: "Amit Patel", date: "2024-03-18", amount: "₹5,600", status: "rejected", utr: "UTR345678" },
    { id: "B004", name: "Sneha Reddy", date: "2024-03-17", amount: "₹7,800", status: "pending", utr: "UTR901234" },
    { id: "B005", name: "Vikram Singh", date: "2024-03-16", amount: "₹6,400", status: "approved", utr: "UTR567890" },
    // Add more bookings...
  ];

  const stats = [
    { title: "Total Bookings", value: "156", icon: Building, color: "bg-blue-500" },
    { title: "Approved", value: "89", icon: CheckCircle, color: "bg-green-500" },
    { title: "Pending", value: "45", icon: Clock, color: "bg-yellow-500" },
    { title: "Rejected", value: "22", icon: XCircle, color: "bg-red-500" },
    { title: "Total Revenue", value: "₹4,32,000", icon: IndianRupee, color: "bg-purple-500" },
    { title: "Total Users", value: "120", icon: Users, color: "bg-indigo-500" },
  ];

  const monthlyBookings = [
    { month: "Jan", bookings: 34, revenue: 238000 },
    { month: "Feb", bookings: 42, revenue: 294000 },
    { month: "Mar", bookings: 38, revenue: 266000 },
    { month: "Apr", bookings: 45, revenue: 315000 },
  ];

  const roomTypeDistribution = [
    { name: "Standard", value: 45 },
    { name: "VIP", value: 30 },
    { name: "Family", value: 25 },
  ];

  const handleViewDetails = (id: string) => {
    navigate(`/admin/room-allocation/${id}`);
  };

  const handleApprove = (id: string) => {
    // Handle approval logic
    console.log('Approved booking:', id);
  };

  const handleReject = (id: string) => {
    // Handle rejection logic
    console.log('Rejected booking:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b flex items-center justify-between">
          {isSidebarOpen && <h2 className="font-bold text-xl text-blue-600">SPORTI Admin</h2>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 text-blue-600">
                <Home className="w-6 h-6" />
                {isSidebarOpen && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700">
                <FileText className="w-6 h-6" />
                {isSidebarOpen && <span>Bookings</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700">
                <Calendar className="w-6 h-6" />
                {isSidebarOpen && <span>Calendar</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700">
                <Settings className="w-6 h-6" />
                {isSidebarOpen && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 text-red-600 w-full">
            <LogOut className="w-6 h-6" />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{stat.title}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-full`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <Title>Monthly Bookings</Title>
              <BarChart
                className="mt-6"
                data={monthlyBookings}
                index="month"
                categories={["bookings"]}
                colors={["blue"]}
                yAxisWidth={48}
              />
            </Card>

            <Card>
              <Title>Revenue Trend</Title>
              <AreaChart
                className="mt-6"
                data={monthlyBookings}
                index="month"
                categories={["revenue"]}
                colors={["emerald"]}
                valueFormatter={(number) => `₹${(number/1000).toFixed(1)}K`}
              />
            </Card>

            <Card>
              <Title>Room Type Distribution</Title>
              <DonutChart
                className="mt-6"
                data={roomTypeDistribution}
                category="value"
                index="name"
                colors={["blue", "cyan", "indigo"]}
              />
            </Card>

            <Card>
              <Title>Booking Success Rate</Title>
              <LineChart
                className="mt-6"
                data={monthlyBookings}
                index="month"
                categories={["bookings"]}
                colors={["purple"]}
                yAxisWidth={48}
              />
            </Card>
          </div>

          {/* Bookings Table */}
          <Card>
            <Title>Recent Bookings</Title>
            <TabGroup>
              <TabList className="mt-6">
                <Tab>All</Tab>
                <Tab>Pending</Tab>
                <Tab>Approved</Tab>
                <Tab>Rejected</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className="mt-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Booking ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Guest Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bookings.map((booking) => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              #{booking.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                ${booking.status === 'approved' ? 'bg-green-100 text-green-800' : 
                                  booking.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                                  'bg-yellow-100 text-yellow-800'}`}>
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleViewDetails(booking.id)}
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  View
                                </button>
                                {booking.status === 'pending' && (
                                  <>
                                    <button
                                      onClick={() => handleApprove(booking.id)}
                                      className="text-green-600 hover:text-green-900"
                                    >
                                      Approve
                                    </button>
                                    <button
                                      onClick={() => handleReject(booking.id)}
                                      className="text-red-600 hover:text-red-900"
                                    >
                                      Reject
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabPanel>
                {/* Add similar table structure for other tabs */}
              </TabPanels>
            </TabGroup>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;