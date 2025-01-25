import React from 'react';

const FloatingButton = () => {
    return (
        <div className="fixed z-20 bottom-6 right-6">
            <button className="w-16 h-16 lg:w-auto lg:h-auto lg:px-6 lg:py-3 lg:rounded-lg lg:bg-white/15 lg:backdrop-blur-md bg-white/15 backdrop-blur-md text-purple-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-300">
                <span className="lg:text-base font-bold lg:font-medium">
                    <span className="text-4xl lg:hidden">+</span>
                    <span className="text-2xl font-bold hidden lg:inline">Enter Code</span>
                </span>
            </button>
        </div>
    );
};

export default FloatingButton;

//w-16 h-16 bg-white/15 backdrop-blur-md text-purple-500 rounded-full shadow-lg flex items-center justify-center">
{/* <span className="text-4xl font-bold">+</span> */ }