import { memo, useState } from "react";
import { Transition } from '@tailwindui/react';
import { MdOutlineKeyboardArrowDown as Down, MdOutlineKeyboardArrowUp as Up } from 'react-icons/md';
import { localImg } from '@assets';
import { useTranslation } from 'react-i18next';
const log = (log: any, production: boolean = true) => {
    if (!production) {
        console.log(log);
    }
}
interface Type {
    setIsLanOpen: any,
    isLanOpen: boolean

}
const Language = () => {
    const [isLanOpen, setIsLanOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const lan = i18n.language;
    log(i18n.language);
    const currentLogo = lan === 'mm' ? localImg.mm : lan === 'jp' ? localImg.jp : localImg.en;
    const languageAction = () => {
        setIsLanOpen(!isLanOpen);
    }
    const chooseLanguageAction = (lan: string) => {
        // console.log(lan);
        log('amie jin kg');
        i18n.changeLanguage(lan);
        localStorage.setItem('local', lan);
        setIsLanOpen(false);
    }

    return (<>
        <div className="relative flex flex-col">
            <div onClick={languageAction} className="flex flex-row p-2 w-[120px] items-center justify-start select-none cursor-pointer">
                <div className="flex flex-row items-center justify-center">
                    <img src={currentLogo} alt="mm" className="h-[14px] mr-2" />
                    {lan === 'mm' ? "MM" : lan === 'jp' ? 'JP' : 'EN'}
                </div>
                {isLanOpen ? <Up size={30} /> : <Down size={30} />}
            </div>
            {
                isLanOpen && <Transition
                    show={isLanOpen}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0 scale-0"
                    enterTo="opacity-100 scale-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0 scale-0"
                >
                    <div
                        className="absolute right-0 opacity-70 dark:opacity-100 w-full rounded-b-md shadow-lg text-sm overflow-hidden border-0 z-20 pt-[10px]"
                    >
                        {
                            ['en', 'jp', 'mm'].map((language) => {
                                return (
                                    <div key={language} onClick={() => chooseLanguageAction(language)} className={`flex flex-row p-2 items-center  justify-start bg-slate-800  hover:bg-yellow-600 select-none cursor-pointer ${lan === language && 'bg-slate-600'}`}>
                                        <img src={localImg[(language === 'en' ? 'en' : (language === 'jp' ? 'jp' : 'mm'))]} alt={language} className="h-[14px] mr-1.5" />
                                        {t(language)}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </Transition>
            }
        </div>
    </>)
}
export default memo(Language);