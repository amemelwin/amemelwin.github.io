import { TiTick } from 'react-icons/ti';
import { projectImg } from '@assets';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Zoom, Slide } from "react-awesome-reveal";

const MobileLike = () => {
    const { t, i18n } = useTranslation();
    const mobile_like = projectImg.mobile_like;
    const mobile_like_m = projectImg.mobile_like_m;
    const mobile_description = "The website developed for the Mobile Like Phone shop in Mandalay, Progress web application (PWA) technology is used, so it can be used not only as a web app, but also as a mobile app.";
    return (<>
        <div className='container mx-auto flex flex-col md:flex-row-reverse '>
            <div className="flex-1 flex-col mx-10">
                <a href='https://mobilelikemm.com/' target="_blank" rel="noreferrer">
                    <div className=' flex flex-row  '>
                        <div className='relative '><img src={mobile_like} className=" object-contain h-72 " />
                            <div className=' right-0 bottom-14 md:bottom-0 absolute'><img src={mobile_like_m} className=" object-contain h-32 md:h-48" alt='hero' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className='flex-1 flex flex-col items-start justify-center  '>
                <a href="https://mobilelikemm.com/" className='dark:text-white text-gray-600 text-lg md:text-xl font-bold my-2 '>Mobile Like Phone Shop</a>
                <a href="https://mobilelikemm.com/" className='italic text-blue-500 dark:font-bold dark:text-textGreen mb-1' >https://mobilelikemm.com/</a>
                <div className='dark:text-textGreen text-blue-900 font-[100px] md:font-[200px] text-[14px] md:text-[16px]'>{t(mobile_description)}</div>
                <div className='dark:text-[#D0D0D0] text-dark  w-full text-sm md:text-md  mt-3 grid grid-cols-2 md:grid-cols-4 '>
                    <Zoom cascade damping={0.3} className="flex flex-row  w-full">
                        <div className="flex flex-row"> <TiTick size={20} className="dark:text-textGreen" />React JS</div>
                        <div className="flex flex-row"> <TiTick size={20} className="dark:text-textGreen" />Laravel API</div>
                        <div className="flex flex-row"> <TiTick size={20} className="dark:text-textGreen" />Tailwind CSS</div>
                    </Zoom >
                </div>
                <div className='flex flex-row justify-between md:justify-start mt-8 w-full'>
                </div>
            </div>

        </div>
    </>)
}
export default memo(MobileLike);