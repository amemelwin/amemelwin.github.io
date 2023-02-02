import { memo } from "react";
import Language from "./Language";
import { useTranslation } from 'react-i18next';
interface NavItem {
    name: string;
    active: boolean;
    onClick: Function;
}
interface NavtabsProps {
    navItems: Array<NavItem>
}
const NavtabsComponent = ({ navItems }: NavtabsProps) => {
    const { t, i18n } = useTranslation();
    const [lan] = i18n.languages;
    return (<>
        <div className='flex cursor-pointer z-45  select-none font-semibold text-md text-[#d9d9d9]'>
            {
                navItems.map(({ name, active, onClick }: any, i: number) => {
                    return (<div key={i} onClick={onClick} className="flex flex-col items-center">
                        <div className={`py-2 px-3 flex flex-col text-textGreen   rounded-sm ${active && ' '} `
                        } >
                            <div className={`mx-2`}>
                            {/* ${active ? '-rotate-[5deg]' : '-rotate-[5deg]'} */}
                                {t(name)}
                                <div className={`${active ? 'h-[3px] bg-gradient-to-tr from-dark to-textGreen animate-spread' : ''}`}></div>
                            </div>
                            {/* <div className={`${active ? 'w-[600px] h-[5px] bg-green-500 animate-spread' : ''}`}>{t(name)}</div> */}
                            {/* <div className={`${active ? 'underline decoration-wavy decoration-[#d9d9d9]  w-full underline-offset-8' : ''}`}>{t(name)}</div> */}
                        </div>
                    </div>
                    )
                }
                )
            }
            <Language />
        </div>
    </>)
}
export default memo(NavtabsComponent);
