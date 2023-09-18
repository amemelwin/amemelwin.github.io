import { memo, useEffect } from 'react';
// import Reveal from 'react-reveal/Reveal';
import { useTranslation } from 'react-i18next';
import JLPTOldQuestion from './JLPTOldQuestion';
import MinnamasterN4 from './MinnamasterN4';
import MobileLike from './MobileLike';
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
        <div id="portfolio" className={`${active ? '' : 'dark:bg-sDark bg-sLight'} py-[40px] md:py-[60px] `}>
            <div className='container mx-auto dark:text-white text-gray-600 text-xl lg:text-2xl font-bold'>{t(title)}</div>
            <div className=" h-12  md:h-20 "></div>
            <MinnamasterN4/>
            <div className=" h-12  md:h-48 "></div>
            <MobileLike />
            <div className=" h-12  md:h-48 "></div>
            <JLPTOldQuestion />
            <div className=" h-12 md:h-48 "></div>
        </div>
    )
}
export default memo(Portfolio);