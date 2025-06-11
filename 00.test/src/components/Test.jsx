// src/components/Test.jsx
import React from 'react'
import Header from './Header';
import MapSection from './MapSection';
import FilterChartSection from './FilterChartSection';
import ChatFooter from './ChatFooter';

const Test = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-white text-black overflow-hidden">
            <Header />
            <MapSection />
            <FilterChartSection/>
            <ChatFooter />
        </div>
    );
}

export default Test