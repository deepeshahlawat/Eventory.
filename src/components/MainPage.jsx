import React from 'react'
import Header from "./HeaderMain"
import ButtonGradient from "../assets/svg/ButtonGradient"
import Events from "../components/Events"
import FloatingButton from "../components/Addbtn"
import { Gradient } from "../components/design/Services"

const MainPage = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
            </div>
            <ButtonGradient />
            <div className="lg:flex lg:justify-evenly lg:items-center lg:w-full">
                <Events />
                <Events />
                <Events />

            </div>
            <div className="lg:flex lg:justify-evenly lg:items-center lg:w-full">
                <Events />
                <Events />
                <Events />
            </div>
            <Gradient />
            <FloatingButton />


        </>
    )
}

export default MainPage