
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  BarChart3, 
  CreditCard,
  MessageSquare,
  Mail,
  Settings
} from 'lucide-react';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AdminSidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen }: AdminSidebarProps) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'subscriptions', name: 'Subscriptions', icon: CreditCard },
    { id: 'community', name: 'Community', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'newsletter', name: 'Newsletter', icon: Mail },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-lg z-30 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      } lg:w-64`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            {(isOpen || window.innerWidth >= 1024) && (
              <div>
                <h2 className="text-xl font-bold text-blue-900">WealthWise</h2>
                <p className="text-sm text-gray-600">Admin Panel</p>
              </div>
            )}
          </div>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                {(isOpen || window.innerWidth >= 1024) && (
                  <span className="ml-3 font-medium">{item.name}</span>
                )}
              </button>
            );
          })}
        </nav>
        
        <div className="absolute bottom-6 left-6 right-6">
          {(isOpen || window.innerWidth >= 1024) && (
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-blue-900">Admin User</p>
                  <p className="text-xs text-blue-600 truncate">Super Admin</p>
                </div>
              </div>
              <div className="mt-2 text-xs text-blue-600">
                Last login: June 19, 2025
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
