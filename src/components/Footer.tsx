import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
interface FooterProps {
    pageYOffset: number;
    scrollPosition: number;
}
const Footer = ({ scrollPosition, pageYOffset }: FooterProps) => {
    const { t, i18n } = useTranslation();
    const firstName = 'A Mie';
    const secondName = 'Mie Lwin';
    return (<div className={`bg-slate-800 w-full  flex flex-col justify-center h-14 md:h-16`}>
        <div className="flex flex-row container mx-auto justify-between relative">
            {/* absolute bult holder */}
            {/* bult md:56px sm:48px max:md:bottom-[33px] mx-md:-mt-[31px] (x1,y1) = (-mt-[61px],md:yo-33px) (x2,y2) = (-mt-[31px],yo)     */}
            {/* Md */}
            <div className={`hidden md:block fixed h-[31px] overflow-hidden bottom-[33px] right-[33px]`}>
                {/* position >= yo - 33 */}
                <div className={`${scrollPosition + 10 >= pageYOffset ? '' : 'hidden '} dark:bg-[#707070] bg-[#e9dd99] w-[62px] h-[62px] -mt-[31px] rounded-full`}></div>
            </div>
            {/* Sm  */}
            <div className={`md:hidden fixed h-[27px] overflow-hidden bottom-[29px] right-[29px]`}>
                <div className={`${scrollPosition + 10 >= pageYOffset ? '' : 'hidden '} dark:bg-[#707070] bg-[#e9dd99] w-[54px] h-[54px] -mt-[27px] rounded-full`}></div>
            </div>
            <div className="ml-5 lg:ml-0 flex-row items-center hidden lg:block">
                <div className="">
                    <span className={`text-white font-sans font-semibold text-xl mr-2`}>{t(firstName)}</span>
                    <span className={` text-gray-300 font-sans font-semibold text-xl`}>{t(secondName)} </span>
                </div>

            </div>
            <div className="ml-5 lg:ml-0  flex flex-row md:items-center">
                <div className=" flex flex-col md:flex-row text-gray-400 font-sans text-[13px] md:text-sm  items-start md:items-center ">
                    <div className='mr-2'>©2023 •</div>
                    <div>All Rights Reserved</div>
                </div>
            </div>
            <div className={`mr-[70px] lg:mr-[30px] flex flex-row items-center`}>
                <a className="ml-3 lg:ml-8 text-white" href="https://github.com/amemelwin" target='_blank'>
                    <AiFillGithub size={28} />
                </a>

                <a className="ml-3 lg:ml-8" href="https://t.me/FRANkkie" target='_blank'>
                    <FaTelegram size={28} className="text-white" />
                </a>
            </div>
        </div>
    </div>
    )
}
export default Footer;