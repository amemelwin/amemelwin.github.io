import { memo } from "react";
import { useTranslation } from 'react-i18next';
import { TiTick } from 'react-icons/ti';
import { profileImg } from "@assets";
import { Fade } from "react-awesome-reveal";

const AboutMeSection = () => {
    const { t } = useTranslation();
    const about = "About Me";
    const intro = "Hello World! I'm Amie. Nice to meet you.";
    const body = "During the suspension of school due to covid-19 and other situations, I conducted studies related to IT. And I attended software development courses and participated in some projects with freelancer friends. In 2022, I became a member of Integrated Solution and participated in developing teaching aid softwares  for learning Japanese language such as JLPT N4, JLPT N3 Apps , and E-commerce system for Mobile Like phone shop from Mandalay.";
    const conclusion = "I have passed the N3 level of Japanese and currently studying and preparing to enter the workplace.";
    const profile = profileImg.profile;
    // const languageItems = ['JavaScript(ES6+)', 'TypeScript', 'ReactJs', 'Tailwind CSS', 'Vue Js', 'PHP/Laravel', 'MySQL', 'PostgreSQL']
    return (<>
        <div className='dark:text-white text-gray-600 text-xl lg:text-2xl font-bold mt-12 mb-12'>{t(about)}</div>
        <div className='flex flex-col-reverse md:flex-row-reverse '>
            <div className='flex-[7] mb-[70px] md:py-[0px] flex flex-col items-start justify-center md:pr-8  md:text-justify'>
                <div className="dark:text-textGreen text-blue-900 font-[100px] md:font-[200px] mt-3 text-[14px] md:text-[16px]">
                    <div className='mt-3'>{t(intro)}</div>
                    <div className=' mt-3'>{t(body)}</div>
                    <div className=' mt-3'>{t(conclusion)}</div>
                </div>
                <div className="h-10"></div>
                <div className=""></div>

                <div className="flex flex-row bg-black">
                    {/* <div className=" ">
                        {languageItems.filter((item: any, i) => i % 2 === 0).map(e => <span>{e}</span>)}
                    </div>
                    <div className="text-green-500">
                        {
                            languageItems.filter((item: any, i) => i % 2 !== 0).map(e => <span>{e}</span>)
                        }
                    </div>
                    <div>
                        
                        firstList{firstList}
                        secondList{secondList}
                    </div> */}

                </div>
                <Fade cascade damping={0.3} className="flex flex-row  w-full">
                    <div className='flex flex-row justify-start md:justify-between w-full mb-1 dark:text-gray-400 text-gray-600 text-sm lg:text-md'>
                        <div className=" flex-1 flex flex-row  items-center ">
                            <TiTick size={20} className="dark:text-textGreen" />
                            JavaScript(ES6+)
                        </div>
                        <div className="flex-1 flex flex-row  items-center "> <TiTick size={20} className="dark:text-textGreen" />Java Spring Boot</div>
                    </div>
                    <div className='flex flex-row justify-between  mb-1 w-full dark:text-gray-400 text-gray-600 text-sm lg:text-md'>
                        <div className="flex-1 flex flex-row  items-center "> <TiTick size={20} className="dark:text-textGreen" />React Js</div>
                        <div className="flex-1 flex flex-row  items-center "> <TiTick size={20} className="dark:text-textGreen" />Tailwind CSS</div>
                    </div>
                    <div className='flex flex-row justify-between mb-1  w-full dark:text-gray-400 text-gray-600 text-sm lg:text-md'>
                        <div className="flex-1 flex flex-row  items-center "> <TiTick size={20} className="dark:text-textGreen" />Vue Js</div>
                        <div className="flex-1 flex flex-row  items-center "> <TiTick size={20} className="dark:text-textGreen" />PHP/Laravel</div>
                    </div>
                    <div className='flex flex-row justify-between mb-1  w-full dark:text-gray-400 text-gray-600 text-sm lg:text-md'>
                        <div className="flex-1 flex flex-row  items-center "> <TiTick size={20} className="dark:text-textGreen" />MySQL</div>
                        <div className="flex-1 flex flex-row  items-center "> <TiTick size={20} className="dark:text-textGreen" />PostgreSQL</div>
                    </div>
                </Fade>
            </div>
            <div className="md:h-[72px] "></div>
            <div className='flex-[5] md:pt-[30px] flex flex-row justify-center  items-start'>
                <div className={` shadow-md shadow-slate-300 overflow-hidden rounded w-40 h-40 md:w-60 md:h-60 md:object-contain `}>
                    <img src={profile} alt='profile' />
                </div>
            </div>

        </div>
    </>)
}
export default memo(AboutMeSection);