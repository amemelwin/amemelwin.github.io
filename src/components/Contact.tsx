import { memo, useEffect } from 'react';
import { FaTelegram } from 'react-icons/fa';
// import Reveal from 'react-reveal/Reveal';
import { MdPlace, MdPhoneInTalk, MdMail } from 'react-icons/md';
import { Fade, Flip, Bounce } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
interface ContactProps {
    dark: string;
    active: boolean;
}
const Contact = ({ dark, active }: ContactProps) => {
    // const Reveal = require("react-reveal/Reveal")
    const phone = require("@assets/images/phoneCall.png");
    const { t, i18n } = useTranslation();
    const start = "Start by";
    const hi = "Saying Hi";
    const address = "Yangon, Myanmar";

    return (
        <div id="contact" className={`${active ? '' : 'dark:bg-sDark bg-sLight'} py-[72px] md:py-[140px] lg:py-[100px]`}>
            {/* <div id="Contact" className="w-full bg-silver-gray flex flex-col py-20 select-none"> */}
            <div className="flex flex-col lg:flex-row container mx-auto">
                <div className="flex-1 flex flex-col items-center lg:items-start">
                    <div className={`${dark === 'dark' ? 'text-white' : 'text-slate-900'} leading-relaxed lg:leading-loose font-sans text-2xl lg:text-4xl text-center lg:text-left `}>
                        let's make something amazing together
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className=" font-sans text-lg">Start by <span className="text-green-400">Saying Hi</span></div>
                        <a className="ml-3 lg:ml-4" href="https://t.me/FRANkkie" target='_blank'>
                            <FaTelegram size={35} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start pl-5 mt-8  ">
                    {/* <div className="font-sans text-text-gray">Information</div> */}
                    <div className=" text-left  my-1 text-lg flex flex-row items-center">
                        <MdPlace size={20} className="mr-2" />
                        {t(address)}
                    </div>
                    <div className="  my-1 text-xl lg:text-xl select-text flex flex-row items-center">
                        <MdPhoneInTalk className='mr-2' size={20} />
                        +959 421 208 939
                    </div>
                    <a href='https://mrs.amemelwin@gmail.com' target="_blank" rel="noreferrer" className=" cursor-pointer  flex flex-row items-center my-1 text-lg lg:text-xl">
                        <MdMail className='mr-2' size={20} />
                        mrs.amemelwin@gmail.com
                    </a>
                </div>
            </div>
        </div>
        // </div >
    )

}
export default memo(Contact);
