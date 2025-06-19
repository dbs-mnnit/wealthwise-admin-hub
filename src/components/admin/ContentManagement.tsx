
import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Calendar } from 'lucide-react';

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('blogs');

  const mockBlogs = [
    {
      id: 1,
      title: 'Understanding Credit Scores: A Complete Guide',
      author: 'Jane Doe, CFP',
      category: 'Credit',
      status: 'Published',
      date: '2025-06-15',
      views: 1250,
      accessLevel: 'Free'
    },
    {
      id: 2,
      title: 'Building Your Emergency Fund: Start Today',
      author: 'Mike Johnson',
      category: 'Savings',
      status: 'Draft',
      date: '2025-06-18',
      views: 0,
      accessLevel: 'Premium'
    },
    {
      id: 3,
      title: 'Investment Basics for Beginners',
      author: 'Sarah Williams',
      category: 'Investing',
      status: 'Published',
      date: '2025-06-10',
      views: 2100,
      accessLevel: 'Free'
    }
  ];

  const mockVideos = [
    {
      id: 1,
      title: 'Understanding Roth IRAs',
      description: 'Complete guide to Roth IRA benefits and strategies',
      duration: '12:30',
      status: 'Published',
      accessLevel: '$29 Tier'
    },
    {
      id: 2,
      title: 'Budget Planning Workshop',
      description: 'Interactive session on creating monthly budgets',
      duration: '18:45',
      status: 'Draft',
      accessLevel: '$49 Tier'
    }
  ];

  const mockEbooks = [
    {
      id: 1,
      title: 'Debt Repayment Strategies Guide',
      description: 'Complete 20-page guide to eliminating debt',
      pages: 20,
      downloads: 156,
      accessLevel: '$29 Tier'
    },
    {
      id: 2,
      title: 'Retirement Planning Workbook',
      description: 'Interactive workbook for retirement planning',
      pages: 35,
      downloads: 89,
      accessLevel: '$49 Tier'
    }
  ];

  const tabs = [
    { id: 'blogs', name: 'Blog Posts', count: mockBlogs.length },
    { id: 'videos', name: 'Videos', count: mockVideos.length },
    { id: 'ebooks', name: 'E-books', count: mockEbooks.length }
  ];

  const renderBlogTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title & Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Views
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Access
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockBlogs.map((blog) => (
            <tr key={blog.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                  <div className="text-sm text-gray-500">{blog.author}</div>
                  <div className="text-xs text-gray-400">{blog.date}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {blog.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  blog.status === 'Published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {blog.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {blog.views.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  blog.accessLevel === 'Free' 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {blog.accessLevel}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button className="text-blue-600 hover:text-blue-900">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="text-green-600 hover:text-green-900">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderVideoGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockVideos.map((video) => (
        <div key={video.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="aspect-video bg-gray-200 rounded-t-lg flex items-center justify-center">
            <div className="text-gray-500">Video Thumbnail</div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-2">{video.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{video.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">{video.duration}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                video.status === 'Published' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {video.status}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {video.accessLevel}
              </span>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEbookGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEbooks.map((ebook) => (
        <div key={ebook.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-16 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">PDF</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{ebook.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{ebook.description}</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Pages:</span>
              <span className="text-gray-900">{ebook.pages}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Downloads:</span>
              <span className="text-gray-900">{ebook.downloads}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Access:</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {ebook.accessLevel}
              </span>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="flex-1 text-blue-600 hover:text-blue-900 text-sm border border-blue-200 rounded px-3 py-2">
              Download
            </button>
            <button className="text-green-600 hover:text-green-900">
              <Edit className="w-4 h-4" />
            </button>
            <button className="text-red-600 hover:text-red-900">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600 mt-1">Manage blogs, videos, and e-books</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Content
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
              <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {activeTab === 'blogs' && renderBlogTable()}
        {activeTab === 'videos' && (
          <div className="p-6">
            {renderVideoGrid()}
          </div>
        )}
        {activeTab === 'ebooks' && (
          <div className="p-6">
            {renderEbookGrid()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;
