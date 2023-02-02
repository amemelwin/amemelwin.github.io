import { memo, useState, useEffect, useCallback } from "react";
import DarkModeIcon from '@components/rive/DarkModeIcon';
import { PrimaryNavbar } from '@components/Header/Navbar';
import { useTranslation } from 'react-i18next';
import IntroSection from '@components/intro/IntroSection';
import Portfolio from '@components/portfolio/Portfolio';
import Education from "@components/Education";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import AmieBanner from "@components/AmieBanner";
import { MdDriveEta } from "react-icons/md";

const HomeScreen = ({ toggleTheme, dark, isDrop, setIsDrop }: any) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [oldScrollPos, setOldScrollPos] = useState(0);
    const [previousYOffset, setPreviousYOffset] = useState(window.pageYOffset);
    const [showScroll, setShowScroll] = useState(true);

    const [pageYOffset, setPageYOffset] = useState<number>(0);
    const [introY, setIntroY] = useState<number>(0);
    const [portfolioY, setPortfolioY] = useState<number>(0);
    const [educationY, setEducationY] = useState<number>(0);
    const [contactY, setContactY] = useState<number>(0);
    const scrollHandler = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        const intervel = 300;
        // x1,y1 = -mt-[61px],yo-33px
        // x2,y2 = -mt-[31px],yo
        /*
        if(Math.abs(position- oldScrollPos)>=( intervel ) ) {
            if(position>oldScrollPos){
                setOldScrollPos(oldScrollPos + intervel);
            }else{
                setOldScrollPos(oldScrollPos - intervel);
            }
            if(position>500){
                if(position>oldScrollPos){
                    setShowScroll(false);
                }else{
                    setShowScroll(true);
                }
            }
        }
        */
    }
    const sizeHandler = async () => {
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: 'smooth'
        });
        // await (()=>new Promise((r,e)=>setInterval(r,500)))();
        // const main = document.getElementById('main')!.getBoundingClientRect();
        const intro = document.getElementById('intro')!.getBoundingClientRect();
        const portfolio = document.getElementById('portfolio')!.getBoundingClientRect();
        const education = document.getElementById('education')!.getBoundingClientRect();
        const contact = document.getElementById('contact')!.getBoundingClientRect();
        setPageYOffset(Math.floor(document.documentElement.scrollHeight - document.documentElement.clientHeight));
        setIntroY(intro.top);
        setPortfolioY(parseInt(portfolio.top.toFixed(0)));
        setEducationY(parseInt(education.top.toFixed(0)));
        setContactY(parseInt(contact.top.toFixed(0)));
    }
    useEffect(() => {
        if (introY === 0 || window.pageYOffset < 100) {
            const intro = document.getElementById('intro')!.getBoundingClientRect();
            const portfolio = document.getElementById('portfolio')!.getBoundingClientRect();
            const education = document.getElementById('education')!.getBoundingClientRect();
            const contact = document.getElementById('contact')!.getBoundingClientRect();
            // handleNavigation();
            setPageYOffset(Math.floor(document.documentElement.scrollHeight - document.documentElement.clientHeight));
            setIntroY(intro.top);
            setPortfolioY(parseInt(portfolio.top.toFixed(0)));
            setEducationY(parseInt(education.top.toFixed(0)));
            setContactY(parseInt(contact.top.toFixed(0)));
        }

        window.addEventListener('resize', sizeHandler);
        window.addEventListener('scroll', scrollHandler, { passive: true });
        // window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            // window.removeEventListener('scroll', handleNavigation);
            window.removeEventListener('resize', sizeHandler);
        }
    }, [introY]);
    const { t, i18n } = useTranslation();
    return (
        <div id="main" className="">
            {
                true && <div className="fixed top-[120px] p-2 rounded-r-md bg-blue-800 z-50">
                    <div>y: {Math.floor(scrollPosition)}</div>
                    {/* <div>main: {mainY}</div> */}
                    {/* <div>YOff: {pageYOffset}</div> */}
                    <div>info: {introY}</div>
                    <div>Port: {portfolioY}</div>
                    <div>edu: {educationY}</div>
                    <div>contact: {contactY}</div>

                    <div className="md:hidden"> sm</div>
                    <div className="hidden md:flex lg:hidden"> md</div>
                    <div className="hidden  lg:flex"> lg</div>
                </div>
            }
            {/* Navbar */}
            <PrimaryNavbar setOldScrollPos={setOldScrollPos} showScroll={showScroll} dark={dark} isDrop={isDrop} setIsDrop={setIsDrop} scrollPosition={scrollPosition} introY={introY} portfolioY={portfolioY} educationY={educationY} contactY={contactY} setScrollPosition={setScrollPosition} />


            <div onClick={isDrop ? () => setIsDrop(false) : () => { }} className="">
                <IntroSection active={scrollPosition + 200 >= 0 && scrollPosition + 200 < portfolioY - 1!} />
                {/* <div className='w-[600px] h-[5px] bg-green-500 animate-spread'></div> */}
                <Portfolio active={scrollPosition + 200 >= portfolioY! && scrollPosition + 200 < educationY!} />
                <Education active={scrollPosition + 200 >= educationY! && scrollPosition + 200 < (educationY! + ((contactY! - educationY!) / 2))} />
                {/* <AmieBanner /> */}
                <Contact dark={dark} active={scrollPosition + 200 >= (educationY! + ((contactY! - educationY!) / 2))} />
                <Footer scrollPosition={scrollPosition} pageYOffset={pageYOffset} />
            </div>
            {/* <div className="w-full h-16 border-white fixed right-5 md:bottom-24 bottom-16 flex justify-end items-center ">
                <DarkModeIcon toggleTheme={toggleTheme} dark={dark} />
            </div> */}
            <div className="border-white fixed w-fit  bottom-[32px] md:bottom-[36px] right-[32px] md:right-[36px]">
                <DarkModeIcon toggleTheme={toggleTheme} dark={dark} />
            </div>
        </div >
    );
}

export default memo(HomeScreen);

