import React, { useState } from 'react';
import { Search, Eye, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Manage page component.
 *
 * @returns {React.ReactElement} Manage page element.
/*******  80e46690-e64d-4763-99a8-6b679e532ec3  *******/
const Manage = () => {
  const [activeTab, setActiveTab] = useState('ຄວາມນິຍົມ');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const properties = [
    {
      id: 1,
      image: '/api/placeholder/120/80',
      title: 'ຄອນໂດຫຼູຫຼາ',
      location: 'ສີສັດຕະນາກ',
      price: '1,000,000 ກີບ/ເດືອນ',
      contact: 'ຕິດຕໍ່ ນາງ ແສງ',
      phone: '020 55555555',
      date: '20/10/2024',
      views: 150
    },
    {
      id: 2,
      image: '/api/placeholder/120/80',
      title: 'ຄອນໂດຫຼູຫຼາ',
      location: 'ສີສັດຕະນາກ',
      price: '1,000,000 ກີບ/ເດືອນ',
      contact: 'ຕິດຕໍ່ ນາງ ແສງ',
      phone: '020 55555555',
      date: '20/10/2024',
      views: 135
    },
    {
      id: 3,
      image: '/api/placeholder/120/80',
      title: 'ຄອນໂດຫຼູຫຼາ',
      location: 'ສີສັດຕະນາກ',
      price: '1,000,000 ກີບ/ເດືອນ',
      contact: 'ຕິດຕໍ່ ນາງ ແສງ',
      phone: '020 55555555',
      date: '20/10/2024',
      views: 98
    }
  ];

  const tabs = ['ຄວາມນິຍົມ', 'ປະຫວັດການຊອກ'];

  return (
    <div className="border items-center justify-center min-h-screen bg-gray-50">
      {/* Main content area with left margin for sidebar */}
      <div className="border items-center justify-center ml-0 lg:ml-64 xl:ml-72 2xl:ml-80">
        <div className=" w-full h-full items-center justify-center  lg:px-6 py-4 lg:py-6">
          
          {/* Header Tabs */}
          <div className="relative mb-4 lg:mb-6">
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-gray-800">{activeTab}</h1>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white shadow-sm"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg z-10 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      activeTab === tab
                        ? 'bg-cyan-50 text-cyan-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}

            {/* Desktop/Tablet Tabs */}
            <div className="hidden lg:flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-6 py-3 xl:px-8 text-sm xl:text-base font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-cyan-400 text-cyan-600 bg-white shadow-sm'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-4 lg:mb-6">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <input
                type="text"
                placeholder="ຄົ້ນຫາອາຄານ, ຫ້ອງ, ບ້ານ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 lg:h-12 pl-4 pr-12 text-sm lg:text-base border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-5 lg:h-5" />
            </div>
          </div>

          {/* Large Desktop Table View (1440px+) */}
          <div className="hidden 2xl:block">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-6 rounded-t-lg">
              <div className="grid grid-cols-8 gap-6 text-white font-medium text-base">
                <div>ຮູບ</div>
                <div>ຊື່ຫັຼກ</div>
                <div>ປະເພດ/ຂະໜາດ</div>
                <div>ລາຄາ</div>
                <div>ຜູ້ຂາຍ</div>
                <div>ເບີໂທລະສົບ</div>
                <div>ວັນທີ່ອອກ</div>
                <div>ຈັດການ</div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
              {properties.map((property, index) => (
                <div key={property.id} className={`grid grid-cols-8 gap-6 p-6 items-center hover:bg-gray-50 transition-colors ${index < properties.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="w-28 h-20 bg-gray-200 rounded-lg overflow-hidden">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-medium text-gray-800">{property.title}</p>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="font-semibold text-gray-800">{property.price}</p>
                  <p className="text-gray-600">{property.contact}</p>
                  <p className="text-blue-600">{property.phone}</p>
                  <div className="flex items-center space-x-3">
                    <p className="text-gray-600">{property.date}</p>
                    <div className="flex items-center text-gray-400">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{property.views}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-cyan-500 text-white text-sm rounded-full hover:bg-cyan-600 transition-colors">
                      ຊາບລະອຽດ
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition-colors">
                      ນຳອອກ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Table View (1024px - 1439px) */}
          <div className="hidden xl:block 2xl:hidden">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-t-lg">
              <div className="grid grid-cols-8 gap-4 text-white font-medium text-sm">
                <div>ຮູບ</div>
                <div>ຊື່ຫັຼກ</div>
                <div>ປະເພດ/ຂະໜາດ</div>
                <div>ລາຄາ</div>
                <div>ຜູ້ຂາຍ</div>
                <div>ເບີໂທລະສົບ</div>
                <div>ວັນທີ່ອອກ</div>
                <div>ຈັດການ</div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
              {properties.map((property, index) => (
                <div key={property.id} className={`grid grid-cols-8 gap-4 p-4 items-center hover:bg-gray-50 transition-colors ${index < properties.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="w-20 h-16 bg-gray-200 rounded-lg overflow-hidden">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">{property.title}</p>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-sm font-medium text-gray-800">{property.price}</p>
                  <p className="text-sm text-gray-600">{property.contact}</p>
                  <p className="text-sm text-blue-600">{property.phone}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-600">{property.date}</p>
                    <div className="flex items-center text-xs text-gray-400">
                      <Eye className="w-3 h-3 mr-1" />
                      <span>{property.views}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full hover:bg-cyan-600 transition-colors">
                      ຊາບລະອຽດ
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-full hover:bg-red-600 transition-colors">
                      ນຳອອກ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet Horizontal List View (768px - 1023px) */}
          <div className="hidden lg:block xl:hidden">
            <div className="space-y-4">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-5">
                    <div className="flex space-x-5">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden">
                          <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.title}</h3>
                            <p className="text-base text-gray-600 mb-2">{property.location}</p>
                            <p className="text-xl font-bold text-cyan-600 mb-3">{property.price}</p>
                          </div>
                          <div className="flex items-center text-sm text-gray-400 ml-4">
                            <Eye className="w-4 h-4 mr-1" />
                            <span>{property.views}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <p className="text-gray-500">{property.contact}</p>
                            <p className="text-blue-600 font-medium">{property.phone}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500">{property.date}</p>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button className="flex-1 py-2.5 bg-cyan-500 text-white text-sm font-medium rounded-full hover:bg-cyan-600 transition-colors">
                            ຊາບລະອຽດ
                          </button>
                          <button className="flex-1 py-2.5 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 transition-colors">
                            ນຳອອກ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet Portrait/Large Phone View (640px - 767px) */}
          <div className="hidden md:block lg:hidden">
            <div className="space-y-4">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-20 bg-gray-200 rounded-lg overflow-hidden">
                          <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-semibold text-gray-800">{property.title}</h3>
                          <div className="flex items-center text-xs text-gray-400 ml-2">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>{property.views}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                        <p className="text-base font-bold text-cyan-600 mb-3">{property.price}</p>
                        
                        <div className="space-y-1 text-xs mb-3">
                          <p className="text-gray-500">{property.contact}</p>
                          <p className="text-blue-600">{property.phone}</p>
                          <p className="text-gray-500">{property.date}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-3 border-t border-gray-100">
                      <button className="flex-1 py-2 bg-cyan-500 text-white text-xs font-medium rounded-full hover:bg-cyan-600 transition-colors">
                        ຊາບລະອຽດ
                      </button>
                      <button className="flex-1 py-2 bg-red-500 text-white text-xs font-medium rounded-full hover:bg-red-600 transition-colors">
                        ນຳອອກ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Phone View (< 768px) */}
          <div className="md:hidden space-y-3">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-3">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-14 bg-gray-200 rounded-md overflow-hidden">
                        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-semibold text-gray-800 truncate pr-2">{property.title}</h3>
                        <div className="flex items-center text-xs text-gray-400 flex-shrink-0">
                          <Eye className="w-3 h-3 mr-1" />
                          <span>{property.views}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{property.location}</p>
                      <p className="text-sm font-bold text-cyan-600 mb-2">{property.price}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-xs mb-3 pl-19">
                    <p className="text-gray-500 truncate">{property.contact}</p>
                    <p className="text-blue-600">{property.phone}</p>
                    <p className="text-gray-400">{property.date}</p>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 py-2 bg-cyan-500 text-white text-xs font-medium rounded-full hover:bg-cyan-600 transition-colors active:bg-cyan-700">
                      ຊາບລະອຽດ
                    </button>
                    <button className="flex-1 py-2 bg-red-500 text-white text-xs font-medium rounded-full hover:bg-red-600 transition-colors active:bg-red-700">
                      ນຳອອກ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-3 mt-6 lg:mt-8">
            <button className="p-3 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-medium shadow-sm">
              1
            </button>
            <button className="p-3 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;