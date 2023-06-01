import { memo } from 'react';
import { profileImg, languageImg } from '@assets';
import { useTranslation } from 'react-i18next';
import AboutMeSection from './AboutMeSection';
import AmieBanner from "@components/AmieBanner";
import { Bounce } from "react-awesome-reveal";
interface IntroSectionProps {
    active: boolean
}
const IntroSection = ({ active }: IntroSectionProps) => {
    const { t } = useTranslation();
    const greeting = "Hi, my name is";
    const name = "A Mie Mie Lwin.";
    const quotes = "I build things for your future.";
    const languageImgs = [
        {
            icon: languageImg.spring,
            label: 'Spring Boot'
        },
        {
            icon: languageImg.laravel,
            label: 'Laravel'
        },
        {
            icon: languageImg.react,
            label: 'ReactJs'
        },
        {
            icon: languageImg.vue,
            label: 'VueJs'
        }              
    ]
    const imageStyle = {
        sm: 'w-[150px] h-[150px] rounded-tl-[55px] rounded-tr-[35px] rounded-bl-[35px] rounded-br-[55px] border-4 dark:border-textGreen border-dark',
        md: 'md:w-[200px] md:h-[200px] md:rounded-tl-[80px] md:rounded-tr-[60px] md:rounded-bl-[60px] md:rounded-br-[80px] md:border-[7px]',
        lg: 'lg:w-[300px] lg:h-[300px] lg:rounded-tl-[120px] lg:rounded-tr-[90px] lg:rounded-bl-[90px] lg:rounded-br-[120px] lg:border-[10px]',
    }
    return (<>
        {/* <div id='intro' className='mt-[72px] md:mt-28'> */}
        <div id='intro' className={`${active ? 'dark:bg-dark bg-white' : 'dark:bg-sDark bg-sLight'} mt-[47px] md:mt-[65px]`}>
            <AmieBanner />
            {/* Intro Session */}
            <div className='container mt-[62px] mx-auto flex flex-col md:flex-row-reverse'>
                <div className='flex-1 flex flex-row justify-center items-center'>
                    <div className={`${imageStyle.sm} ${imageStyle.md} ${imageStyle.lg} rotate-6 overflow-hidden`}>
                        <img src={profileImg.hero} alt='hero' className='object-contain' />
                    </div>
                </div>
                <div className='flex-1 pt-[40px] md:py-[60px] flex flex-col items-start justify-center'>
                    <div className='dark:text-textGreen text-blue-900 font-semibold'>{t(greeting)}</div>
                    <div className='dark:text-white text-dark text-2xl md:text-3xl lg:text-4xl font-bold mt-6'>{t(name)}</div>
                    <div className='dark:text-gray-400 text-gray-600 text-xl lg:text-2xl font-bold mt-6'>{t(quotes)}</div>
                    {/* <div className='grid grid-cols-4  md:gap-8 mt-8 justify-items-center '> */}
                    <div className='flex flex-row justify-between md:justify-start mt-8 w-full'>
                        <Bounce cascade damping={0.3}>
                            {
                                languageImgs.map(({ icon, label }) =>
                                    <div key={label} className='flex flex-col md:mr-8 items-center justify-center '>
                                        <div><img src={icon} alt="icon" className='w-12 md:w-14  h-12 md:h-14 rounded-lg shadow-sm shadow-slate-400 dark:shadow-gray-' /></div>
                                        <div className='mt-1 md:text-sm text-gray-600 dark:text-gray-400 font-semibold text-[11px]'>{label}</div>
                                    </div>
                                )
                            }
                        </Bounce>
                    </div>
                </div>

            </div>
            {/* About Me Session */}
            <div className='h-[48px] md:h-28'></div>
            <div className='container mx-auto'>
                <AboutMeSection />
            </div>

        </div>


    </>);
}
export default memo(IntroSection);