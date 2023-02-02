import { memo } from "react";
import { useTranslation } from 'react-i18next';
import { timeConverter } from '../../src/helper/index';
import ClockComponent from '@components/ClockComponent';
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { localImg } from '@assets';
import ElipseTheory from '@components/amie/ElipseTheory';
import { StarField } from 'starfield-react';

const AmieBanner = () => {
    const { mmTime, jpTime, enTime } = useSelector((state: RootState) => state.dark);
    const { t, i18n } = useTranslation();
    const lan = i18n.language;
    const { day, hrMin, enMonth, jpMonth, mmMonth, enDay, jpDay, mmDay } = timeConverter(lan === 'en' ? enTime : lan === 'jp' ? jpTime : mmTime, lan);
    return (
        <div className="flex flex-row w-full relative bg-black h-[250px] md:h-fit">
            {/* <ElipseTheory/> */}
            <StarField className="absolute opacity-40 h-full w-full" />
            <div className="flex-[1] md:flex-[2]">
                <img src={require('@assets/images/banner_amie.png')} className="object-cover flex flex-row h-full" />
            </div>
            <div className="md:flex-1 bg-gradient-to-r from-black via-slate-900 to-dark">
            </div>
            {lan == "en" && <div className="flex flex-col absolute text-white items-center right-[20px] md:right-[70px] lg:right-[120px] justify-center h-full ">
                <ClockComponent hrMin={hrMin} />
                <div className="text-[18px] md:text-[24px] mt-4">
                    <div className="flex flex-row items-center justify-between">
                        <img src={localImg.en} className="h-[16px] pr-3" />
                        London
                    </div>
                </div>
                <div className="text-[20px] md:text-[30px]">{hrMin}</div>
                <div className="text-[15px] md:text-[20px] md:my-2 ">{enMonth} {day} ({enDay})</div>
            </div>
            }
            {lan == "jp" && <div className="flex flex-col absolute text-white items-center right-[20px] md:right-[70px] lg:right-[70px] justify-center h-full ">
                <ClockComponent hrMin={hrMin} />
                <div className="text-[18px] md:text-[24px] mt-4">
                    <div className="flex flex-row items-center justify-between">
                        <img src={localImg.jp} className="h-[16px] pr-3" />
                        日本
                    </div>
                </div>
                <div className="text-[20px] md:text-[30px]">{hrMin}</div>
                <div className="text-[15px] md:text-[20px] md:my-2 ">{jpMonth}　{day}日　({jpDay})</div>
            </div>
            }
            {lan == "mm" && <div className="flex flex-col absolute text-white items-center right-[20px] md:right-[70px] lg:right-[70px] justify-center h-full ">
                <ClockComponent hrMin={hrMin} />
                <div className="text-[18px] md:text-[24px] mt-4">
                    <div className="flex flex-row items-center justify-between">
                        <img src={localImg.mm} className="h-[16px] pr-3" />
                        မြန်မာ
                    </div>
                </div>
                <div className="text-[20px] md:text-[30px] mt-2 ">{hrMin}</div>
                <div className="text-[15px] md:text-[20px] mt-2 md:my-2 ">{day} {mmMonth} ({mmDay})</div>
            </div>
            }

        </div>
    )
}
export default memo(AmieBanner);
