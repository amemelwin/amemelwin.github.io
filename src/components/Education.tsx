import { memo, useEffect } from 'react';
import { VscCircleFilled } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';
import { Fade} from "react-awesome-reveal";
import ProgressBarComponent, { ProgressBarProps } from './education/ProgressBarComponent';
const progressBars: Array<ProgressBarProps> = [
    {
        title: 'HTML/ CSS',
        completed: 85
    },
    {
        title: 'JavaScript(ES6+)/ Java Spring Boot ',
        completed: 75
    },
    {
        title: 'VueJS/ Vuex',
        completed: 60,
    },
    {
        title: 'ReactJS/ Redux',
        completed: 70
    },
    {
        title: 'PHP/ Laravel',
        completed: 50,
        bgColor: '#f8de00'
    },
    {
        title: 'MySQL/ MariaDB/ PostgreSQL',
        completed: 56,
        bgColor: '#f8de00'
    },
]
interface EducationProps {
    active: boolean;
}
const Education = ({ active }: EducationProps) => {
    // const Reveal = require("react-reveal/Reveal")
    const title = "Education";
    const uni = 'University Of Technology';
    const ycc = '(Yatanapon Cyber City)';
    const uniDate = 'Dec 2016 - Still Today';
    const major = 'Major - Information Science ';
    const high = 'High School';
    const pass = 'Year Passed Matriculation Exam - 2015';
    const state = 'NO.1, BEHS Myitkyina, Kachin State';
    const year = '5th year of undergraduate study';
    const { t } = useTranslation();
    const resume = require('@assets/certis/A MIE MIE LWIN CV FORM.pdf');
    const rirekisyo = require('@assets/certis/rirekisyo.pdf');
    useEffect(() => {
    })
    return (
        <div id="education" className={`${active ? '' : 'dark:bg-sDark bg-sLight'} py-[72px] md:py-[140px] lg:py-[100px]`}>
            <div className='container mx-auto dark:text-white text-gray-600 text-xl lg:text-2xl font-bold '>{t(title)}</div>
            <div className=' container mx-auto flex flex-col md:flex-row justify-evenly mt-5 md:mt-12   '>
                <div className='flex-1 flex flex-col   rounded-md   '>
                    <div className='flex flex-col text-white bg-[#1c3d58]  dark:bg-[#0C2D48] py-4 px-4  dark:text-white rounded-t-md font-semibold justify-center items-center h-full '>
                        <div className='p-2 lg:px-6  flex flex-row items-center'><VscCircleFilled className='text-[#32a84e] dark:text-yellow-300 mr-3 justify-center text-2xl' />April,2023 - ITPEC ( Fundamental of Information Technology Engineer Examination)</div>
                    </div>
                    <div className='flex flex-col text-white bg-[#1c3d58]  dark:bg-[#0C2D48] px-4  dark:text-white rounded-t-md font-semibold justify-center items-center h-full '>
                        <div>{t(uni)} </div>
                        <div>{t(ycc)}</div>
                    </div>
                    <div className=' p-4 lg:p-8 items-center leading-5  md:leading-5   text-white bg-[#1c3d58] dark:bg-[#0C2D48]   font-[100px] md:font-[200px] rounded-b-md text-[13px] md:text-[14px] lg:text-[16px] h-full'>
                        <div className='flex flex-row items-center'><VscCircleFilled className='text-[#32a84e] dark:text-yellow-300 mr-3 justify-center ' />{t(uniDate)}</div>
                        <div className='flex flex-row items-center'><VscCircleFilled className='text-[#32a84e] dark:text-yellow-300 mr-3 justify-center' />{t(major)}</div>
                        <div className='flex flex-row items-center'><VscCircleFilled className='text-[#32a84e] dark:text-yellow-300 mr-3 justify-center' /> {t(year)} </div>
                    </div>
                </div>
                <div className='h-20 md:w-12'></div>
                <div className='flex-1 flex flex-col shadow-md  rounded-md   '>
                    <div className='flex flex-col bg-[#1c3d58]  text-white  dark:bg-[#0C2D48] py-4 px-4  dark:text-white rounded-t-md font-semibold justify-center items-center ll '>
                        {t(high)}
                    </div>
                    <div className='p-4 lg:p-8 items-center leading-6  md:leading-7   text-white bg-[#1c3d58] dark:bg-[#0C2D48]   font-[100px] md:font-[200px] rounded-b-md text-[13px] md:text-[14px] lg:text-[16px] h-full'>
                        <div className='flex flex-row items-center'><VscCircleFilled className='text-[#32a84e] dark:text-yellow-300 mr-3 ' />{t(pass)}</div>
                        <div className='flex flex-row items-center'><VscCircleFilled className='text-[#32a84e] dark:text-yellow-300 mr-3 ' />{t(state)} </div>
                    </div>
                </div>

            </div>
            <div className=' container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 md:gap-y-9'>
                {
                    progressBars.map((props, i) => <ProgressBarComponent {...props} key={i} />)
                }
            </div>
            <div className='flex flex-row justify-center mt-12'>
                <Fade cascade damping={0.5}>
                    <a
                        className="button"
                        href={resume}
                        target="_blank" rel="noreferrer"
                    >
                        <div className='bg-green-300 mr-5 md:mr-10 text-green-600 md:text-lg font-semibold md:font-bold flex flex-row items-center cursor-pointer select-none rounded py-2 px-4 md:py-3 md:px-6'>
                            <div className='mr-3'><FaDownload size={20} /></div>

                            Resume

                        </div>
                    </a>
                    <a
                        className="button"
                        href={rirekisyo}
                        target="_blank" rel="noreferrer"
                    >
                        <div className='bg-red-300 text-red-600  md:text-xl cursor-pointer flex flex-row items-center rounded select-none py-2 px-4 md:py-3 md:px-6'>
                            <div className='mr-3'><FaDownload size={20} /></div>
                            履歴書
                        </div>
                    </a>
                </Fade>
            </div>
        </div>
    )
}
export default memo(Education);
