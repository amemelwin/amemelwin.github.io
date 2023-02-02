import { memo, useState } from "react";
import { Transition } from '@tailwindui/react';
import { AiOutlineCheckSquare as Check } from 'react-icons/ai';
import { MdOutlineCheckBoxOutlineBlank as UnCheck } from 'react-icons/md';
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
const LanguageMobile = () => {
    const [isLanOpen, setIsLanOpen] = useState(true);
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
        <div className="relative flex flex-row items-center justify-between">
            {
                ['en', 'jp', 'mm'].map((language) => {
                    return (
                        <div key={language} onClick={() => chooseLanguageAction(language)} className={`flex flex-row p-2 items-center justify-start select-none cursor-pointer ${lan === language && 'bg-slate-600 text-white'}`}>
                            {/* bg-slate-800  hover:bg-yellow-600 */}
                            <img src={localImg[(language === 'en' ? 'en' : (language === 'jp' ? 'jp' : 'mm'))]} alt={language} className="h-[14px] mr-1.5" />
                            {t(language)}
                            {lan === language?
                                <Check size={20} className="ml-1"/>
                                :<UnCheck size={20} className="ml-1"/>
                            }
                        </div>
                    )
                }
                )
            }
        </div>
    </>)
}
export default memo(LanguageMobile);