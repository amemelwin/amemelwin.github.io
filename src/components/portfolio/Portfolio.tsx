import { memo, useEffect } from 'react';
import React from 'react';
// import Reveal from 'react-reveal/Reveal';
import { Fade, Flip, Bounce } from "react-awesome-reveal";
import { projectImg } from '@assets';
import { useTranslation } from 'react-i18next';
import MobileLike from './MobileLike';
import JLPTOldQuestion from './JLPTOldQuestion';
interface PortfolioProps {
    active: boolean;
}
const Portfolio = ({ active }: PortfolioProps) => {
    // const Reveal = require("react-reveal/Reveal")
    const title = "Recent Projects";
    const { t, i18n } = useTranslation();
    useEffect(() => {


    })
    return (
        <div id="portfolio" className={`${active ? '' : 'dark:bg-sDark bg-sLight'} pt-[48px] md:pt-[100px] `}>
            <div className='container mx-auto dark:text-white text-gray-600 text-xl lg:text-2xl font-bold mt-6'>{t(title)}</div>
            <div className="md:h-5 "></div>
            <MobileLike />
            <div className=" h-12  md:h-48 "></div>
            <JLPTOldQuestion />
            <div className=" h-12 md:h-48 "></div>
        </div>
    )
}
export default memo(Portfolio);