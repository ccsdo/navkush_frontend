import React, { useState, useEffect } from 'react';
import { Search, Download, Eye, Filter, Calendar, Mail, Phone, User, Building, FileText, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const [activeTab, setActiveTab] = useState('careerForms');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedRows, setExpandedRows] = useState({});
  const [dateFilter, setDateFilter] = useState('all');
const Navigate = useNavigate();
  // Fetch data from API
  useEffect(() => {
        const token = localStorage.getItem("adminToken");
        // console.log("Token:", token); // Debugging line
    if (!token) {
      Navigate("/adminLogin");
    }


    fetchData();
  }, []);


  const handleLogOut = () => {
    localStorage.removeItem("adminToken");
    Navigate("/12/13/adminLogin");
  }
  const fetchData = async () => {
    setLoading(true);
    try {
    //  console.log("Fetching data from API...");
      const response = await fetch(`${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/all`);
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);

      setData(getMockData());
    } finally {
      setLoading(false);
    }
  };

  const getMockData = () => ({
          careerForms:["no data in database"],
      contactForms:["no data in database"],
      corporatePartnerForms:["no data in database"],
      donationForms:["no data in database"],
      donationSupportForms:["no data in database"],
      involveForms:["no data in database"],
      internshipApplications:["no data in database"],
      joinngoForms:["no data in database"],
      membershipForms:["no data in database"],
      sponsorshipForms:["no data in database"],
      volunteerForms:["no data in database"],
      volunteeringForms:["no data in database"],
  }); 

  const formCategories = [
    { key: 'careerForms', label: 'Career Applications',  },
    { key: 'contactForms', label: 'Contact Forms' },
        { key: 'corporatePartnerForms', label: 'Corporate Partners' },
    { key: 'donationForms', label: 'Donations' },
        { key: 'donationSupportForms', label: 'donation Support' },
           { key: 'involveForms', label: 'involve Forms' },
    { key: 'internshipApplications', label: 'Internships' },
    { key: 'joinngoForms', label: 'Join NGO' },
    { key: 'membershipForms', label: 'Memberships' },
    { key: 'sponsorshipForms', label: 'Sponsorships' },
    { key: 'volunteerForms', label: 'Volunteers' },
    { key: 'volunteeringForms', label: 'Volunteering' },




  ];

  const toggleRowExpansion = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filterByDate = (items) => {
    if (!items || dateFilter === 'all') return items;
    
    const now = new Date();
    return items.filter(item => {
      const itemDate = new Date(item.createdAt);
      const diffDays = Math.floor((now - itemDate) / (1000 * 60 * 60 * 24));
      
      if (dateFilter === 'today') return diffDays === 0;
      if (dateFilter === 'week') return diffDays <= 7;
      if (dateFilter === 'month') return diffDays <= 30;
      return true;
    });
  };

  const filterData = (items) => {
    if (!items) return [];
    let filtered = filterByDate(items);
    
    if (!searchTerm) return filtered;
    
    return filtered.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const exportToCSV = (formType) => {
    const items = data?.[formType] || [];
    if (items.length === 0) return;

    const headers = Object.keys(items[0]).join(',');
    const rows = items.map(item =>
      Object.values(item).map(val => `"${val}"`).join(',')
    );
    
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formType}_${new Date().toISOString()}.csv`;
    a.click();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderFormCard = (item, index) => {
    const isExpanded = expandedRows[item._id];

    return (
      <div key={item._id} className="bg-white rounded-lg shadow-xl border border-gray-200 mb-3 overflow-hidden hover:shadow-md transition-shadow">
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                <User size={18} className="text-blue-600" />
                {item.name || item.fullName || item.company || item.organizationName || 'N/A'}
              </h3>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Mail size={14} />
                  {item.email}
                </span>
                {item.phone && (
                  <span className="flex items-center gap-1">
                    <Phone size={14} />
                    {item.phone}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => toggleRowExpansion(item._id)}
              className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
            <Calendar size={14} />
            {formatDate(item.createdAt || item.updatedAt)}
          </div>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
              {Object.entries(item)
                .filter(([key]) => !['_id', '__v', 'createdAt', 'updatedAt'].includes(key))
                .map(([key, value]) => (
                  <div key={key} className="text-sm">
                    <span className="font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="ml-2 text-gray-600">
                      {Array.isArray(value) ? value.join(', ') : 
                       typeof value === 'string' && value.includes('http') ? (
                        <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          View File
                        </a>
                      ) : String(value)}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 animate-fade-in purple-pulse">
        <div className="text-center">
          <RefreshCw className="animate-spin mx-auto mb-4" size={40} />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const currentData = filterData(data?.[activeTab] || []);
  const totalCount = data?.[activeTab]?.length || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            
            <button
              onClick={fetchData}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
            <button
              onClick={handleLogOut}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-colors"
            >
              Log Out
            </button>
          </div>

          {/* Tabs - Mobile Scrollable */}
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-2 min-w-max">
              {formCategories.map(category => (
                <button
                  key={category.key}
                  onClick={() => setActiveTab(category.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === category.key
                      ? 'bg-blue-600 text-red-200 shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {/* <span>{category.icon}</span> */}
                  <span className="font-medium">{category.label}</span>
                  <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-white bg-opacity-20">
                    {data?.[category.key]?.length || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search all fields..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>

            <button
              onClick={() => exportToCSV(activeTab)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              <Download size={18} />
              Export CSV
            </button>
          </div>

          <div className="mt-3 text-sm text-gray-600">
            Showing <span className="font-semibold">{currentData.length}</span> of{' '}
            <span className="font-semibold">{totalCount}</span> entries
          </div>
        </div>

        {/* Data Display */}
        {currentData.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">No submissions found</p>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className="space-y-3">
            {currentData.map((item, index) => renderFormCard(item, index))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;