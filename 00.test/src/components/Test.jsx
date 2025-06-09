import React from 'react'
import Header from './Header';
import MapSection from './MapSection';
import FilterChartSection from './FilterChartSection';
import ChatFooter from './ChatFooter';

const Test = () => {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col">
            <Header />
            <MapSection />
            <FilterChartSection />
            <ChatFooter />
        </div>
    );
}

export default Test