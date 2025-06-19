
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardChart = () => {
  const data = [
    { month: 'Jan', users: 400, revenue: 8500 },
    { month: 'Feb', users: 520, revenue: 9200 },
    { month: 'Mar', users: 680, revenue: 10100 },
    { month: 'Apr', users: 750, revenue: 11300 },
    { month: 'May', users: 890, revenue: 12800 },
    { month: 'Jun', users: 1247, revenue: 15400 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Growth Overview</h3>
        <p className="text-sm text-gray-600">User registrations and revenue over time</p>
      </div>
      <div className="p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="users" 
              stroke="#2563eb" 
              strokeWidth={2}
              name="Users"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="revenue" 
              stroke="#059669" 
              strokeWidth={2}
              name="Revenue ($)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
