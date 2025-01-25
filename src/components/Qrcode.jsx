import React, { useState } from "react";
import image from "../assets/QR-code-scams.png";
import Button from "./Button";

const QRPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {/* Button to toggle popup */}
            <Button className="hidden lg:flex" onClick={() => setShowPopup(true)}>
                My QR
            </Button>
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:bg-gray-100">
                {/* Popup */}
                {showPopup && (
                    <div
                        className="min-h-screen fixed inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ease-out opacity-100"
                        style={{ animation: "fadeIn 0.3s ease-out" }}
                    >
                        <div
                            className="relative bg-white p-6 rounded-lg shadow-lg w-80 max-w-[90%] transform transition-transform duration-300 ease-in-out"
                            style={{ animation: "popupSlideIn 0.3s ease-out" }}
                        >
                            {/* QR Code Image */}
                            <img
                                src={image} // Replace with your QR image URL
                                alt="QR Code"
                                className="w-full h-auto object-contain"
                            />

                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                                onClick={() => setShowPopup(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default QRPopup;
