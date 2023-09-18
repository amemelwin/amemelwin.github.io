import { projectImg } from '@assets';
import { memo } from "react";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
import { TiTick } from 'react-icons/ti';

const MinnaMasterN4 = ()=>{
    const { t, i18n } = useTranslation();
    const img = projectImg.minna_master_n4;
    const minnamaster4 = "Minna  Master N4 is for Japanese Learning platform  website application and specially designed for Japanese N4 level learners.  This all-in-one app provides essential skills of vocabulary, kanji grammar and conversation.";
    return <>
     <div className='container mx-auto flex flex-col-reverse md:flex-row-reverse '>
            <div className='flex-[1] flex flex-col  h-20 md:flex-row mt-10 md:mt-0'>
                <div className="flex-[7]  flex flex-col">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-[3]">
                            <a href="https://minnamaster4.com" target="_blank" rel="noreferrer" className='dark:text-white text-gray-600 text-lg md:text-xl font-bold  '>Minna Master N4</a>
                            <a className='pl-5 dark:text-white text-gray-600 text-lg md:text-xl font-bold  '>&</a>
                            <div className=" dark:text-gray-400 text-gray-600 text-sm lg:text-md font-[500px] md:font-[400px] md:mt-3 text-[14px] md:text-[16px]">
                                Minna Master N4
                            </div>
                            <div className="flex flex-col md:flex-row text-sm mt-2  ">
                                <div className="mr-5 text-gray-500">Visit PWA Website </div>
                                <div><a className="italic underline mr-5" href="https://minnamaster4.com" target="_blank" rel="noreferrer">
                                   Minna Master N4
                                    </a>
                                </div>
                            </div>
                        </div> 

                    </div>
                    <div className="dark:text-textGreen text-blue-900 font-[100px] md:font-[200px] mt-[20px]  text-[14px] md:text-[16px]">
                    {t(minnamaster4)}
                    </div>
                    <div className='dark:text-[#D0D0D0] text-dark  w-full text-sm md:text-md  mt-3 grid md:grid-cols-2 gap-2'>
                    <Zoom cascade damping={0.3}>
                        <div className="flex flex-row"> <TiTick size={20} className="dark:text-textGreen" />React JS</div>
                        <div className="flex flex-row"> <TiTick size={20} className="dark:text-textGreen" />React Native Web View</div>
                        <div className="flex flex-row"> <TiTick size={20} className="dark:text-textGreen" />Tailwind CSS</div>
                        <div className="flex flex-row"> <TiTick size={20} className="dark:text-textGreen" />AWS Amplify Hosting</div>
                    </Zoom >
                </div>
                   
                </div>
            </div>

            <div className='flex-[1]  flex flex-row justify-center  items-center'>
                <div className={`px-20`}>
                    <img src={img} alt='oldQ' className=" h-40 md:h-72  shadow-md shadow-slate-400  rounded-[10px] object-contain " />
                </div>
            </div>
        </div>
    </>
}
export default memo(MinnaMasterN4);