import { Transition } from '@tailwindui/react';
import { useState, memo, useEffect } from 'react';
import LanguageMobile from "./LanguageMobile";
import { useTranslation } from 'react-i18next';
const MDropDown = ({ isOpen, navItems }: any) => {
    const { t, i18n } = useTranslation();
    const [lan] = i18n.languages;
    return (
        <div className="relative md:hidden -z-[1]">
                {/* <div className='md:flex md:items-center md:pb-0 pb-12 absolute md:static z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:mr-5 '> */}
                <div className={`origin-top absolute opacity-95 w-screen rounded-b-md shadow-lg text-sm overflow-hidden border-0 z-[-1] bg-textDark transition-all duration-1000 ease-in ${isOpen ? 'top-[0px] ' : 'top-[-230px]'}`}>
                    {
                        navItems.map(({ name, active, onClick }: any) => {
                            return (
                                <div key={name} onClick={onClick} className={`py-2 px-3  text-textGreen rounded-sm ${active && 'text-white bg-yellow-600'} `
                                } >
                                    {t(name)}
                                </div>
                            )
                        }
                        )
                    }
                    <LanguageMobile />
                </div>
        </div >
    );
}
export default memo(MDropDown);