import React from 'react';

const TrendingTabBar = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex items-center mb-4 h-15 px-20 border">
            <h2 className="text-lg font-semibold text-gray-800 mr-4" style={{ letterSpacing: '2px' }}>Trending</h2>
            <div className="inline-flex" role="group" aria-label="Button group">
                <button
                    className={`h-10 px-5 border ${activeTab === 'today' ? 'hover:bg-gray-300 text-teal-300 bg-gradient-to-r from-sky-600 gray-700 gray-600 gray-700 to-gray-800 ' : 'border-gray-100'} rounded-full focus:outline-none focus:border-blue-500 hover:bg-gray-200 hover:text-emerald-400 text-gray-900`}
                    onClick={() => setActiveTab('today')}
                >
                    Today
                </button>
                <button
                    className={`h-10 px-5 border ${activeTab === 'week' ?'hover:bg-gray-300 text-teal-300 bg-gradient-to-r from-sky-600 gray-700 gray-600 gray-700 to-gray-800 ' : 'border-gray-100'} rounded-full focus:outline-none focus:border-blue-500 hover:bg-gray-200 hover:text-emerald-400 text-gray-900`}
                    onClick={() => setActiveTab('week')}
                >
                    This Week
                </button>
            </div>
        </div>
    );
};

export default TrendingTabBar;
