import { memo } from "react";
import { Card} from "@material-tailwind/react";
import { projectImg } from '@assets';
import { useTranslation } from 'react-i18next';
import { Bounce } from "react-awesome-reveal";
const JLPTOldQuestion = () => {
    const { t, i18n } = useTranslation();
    const jlpt = "It is a Progressive Web-Application designed to make it easy to practice old JLPT questions from devices such as mobile phones and laptops.Vue JS is used as the frontend framework, and Tailwind CSS is used for the design. It is planned to be used offline for the convenience of users, and can be easily downloaded from Google Playstore for Android users.";

    const img = projectImg.jlpt_oldQ;
    const n3 = projectImg.jlpt_n3;
    const n4 = projectImg.jlpt_n4;
    return (<>
        <div className='container mx-auto flex flex-col-reverse md:flex-row-reverse '>
            <div className='flex-[1] flex flex-col  h-20 md:flex-row mt-10 md:mt-0'>
                <div className="flex-[7]  flex flex-col">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-[3]">
                            <a href="https://integratedsolution.github.io/pwa-jlpt-n4/#/" target="_blank" rel="noreferrer" className='dark:text-white text-gray-600 text-lg md:text-xl font-bold  '>JLPT N4</a>
                            <a className='pl-5 dark:text-white text-gray-600 text-lg md:text-xl font-bold  '>&</a>
                            <a href="https://integratedsolution.github.io/pwa-jlpt-n3/#/" target="_blank" rel="noreferrer" className='pl-5 dark:text-white text-gray-600 text-lg md:text-xl font-bold  '>JLPT N3</a>
                            <div className=" dark:text-gray-400 text-gray-600 text-sm lg:text-md font-[500px] md:font-[400px] md:mt-3 text-[14px] md:text-[16px]">
                                Old Question PWA Application
                            </div>
                            <div className="flex flex-col md:flex-row text-sm mt-2  ">
                                <div className="mr-5 text-gray-500">Visit PWA Website </div>
                                <div><a className="italic underline mr-5" href="https://integratedsolution.github.io/pwa-jlpt-n4/#/" target="_blank" rel="noreferrer">JLPT N4</a>And <a href="https://integratedsolution.github.io/pwa-jlpt-n3/#/" className="italic underline" target="_blank" rel="noreferrer">JLPT N3</a> </div>

                            </div>
                        </div>

                    </div>
                    <div className="dark:text-textGreen text-blue-900 font-[100px] md:font-[200px]   text-[14px] md:text-[16px]">
                        {t(jlpt)}
                    </div>
                    <div className=" flex flex-row  my-10 justify-center mx-16 md:mx-20    ">
                        <Bounce cascade damping={0.3} className="flex flex-row  w-full justify-evenly ">
                            <a className=" flex flex-col items-center " href="https://play.google.com/store/apps/details?id=com.arkar.jlpt_n3">
                                <img src={n4} className="rounded w-12 h-12 shadow-sm shadow-slate-300" />
                                <div className="text-[9px] md:text-[11.4px] font-[600px]  dark:text-gray-400 text-gray-600 mt-2">1K+ Download</div>
                            </a>
                            <a className=" flex flex-col items-center " href="https://play.google.com/store/apps/details?id=com.arkar.jlpt_n4">
                                <img src={n3} className="rounded w-12 h-12  shadow-sm shadow-slate-300 " />
                                <div className="text-[9px] md:text-[11.4px] font-[600px]  dark:text-gray-400 text-gray-600 mt-2 ">100+ Download</div>
                            </a>
                        </Bounce>
                    </div>
                </div>
            </div>

            <div className='flex-[1]  flex flex-row justify-center  items-center'>
                <div className={`px-20`}>
                    <img src={img} alt='oldQ' className=" h-40 md:h-72  shadow-md shadow-slate-400  rounded-[10px] object-contain " />
                </div>
            </div>
        </div>
    </>)
}
export default memo(JLPTOldQuestion);