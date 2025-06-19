
import { Users, CreditCard, FileText, TrendingUp, Eye, DollarSign } from 'lucide-react';
import DashboardChart from './DashboardChart';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Subscriptions',
      value: '423',
      change: '+8%',
      changeType: 'positive',
      icon: CreditCard,
      color: 'green'
    },
    {
      title: 'Monthly Revenue',
      value: '$12,450',
      change: '+15%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'yellow'
    },
    {
      title: 'Content Views',
      value: '8,492',
      change: '+23%',
      changeType: 'positive',
      icon: Eye,
      color: 'purple'
    }
  ];

  const recentActivity = [
    { action: 'New user registration', user: 'Sarah Johnson', time: '2 minutes ago' },
    { action: 'Blog post published', user: 'Jane Doe', time: '15 minutes ago' },
    { action: 'Subscription upgraded', user: 'Michael Lee', time: '1 hour ago' },
    { action: 'Forum post moderated', user: 'Admin', time: '2 hours ago' },
    { action: 'Newsletter sent', user: 'System', time: '3 hours ago' }
  ];

  const quickActions = [
    { title: 'Add New Blog', description: 'Create a new blog post', color: 'blue' },
    { title: 'Manage Users', description: 'View and edit user accounts', color: 'green' },
    { title: 'View Analytics', description: 'Check performance metrics', color: 'purple' },
    { title: 'Moderate Forum', description: 'Review community posts', color: 'yellow' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with WealthWise today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2">
          <DashboardChart />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`p-4 rounded-lg border-2 border-dashed border-${action.color}-200 hover:border-${action.color}-400 hover:bg-${action.color}-50 transition-colors text-left`}
              >
                <h4 className={`font-medium text-${action.color}-900 mb-1`}>{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
