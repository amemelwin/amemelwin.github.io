import { memo } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { IconType } from "react-icons/lib";
export interface ProgressBarProps {
    title: string;
    completed: number | string;
    bgColor?: string;
}

const ProgressBarComponent = ({ title, completed, bgColor = '#32a84e' }: ProgressBarProps) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="text-right  mb-1 md:mb-2 text-[13px] md:text-[14px] lg:text-[16px]">{title}</div>
                <div className=" w-full">
                    <div className="bg-[#ece8e8]"></div>
                    <ProgressBar
                        height='18px'
                        completed={completed}
                        baseBgColor="#dad0d0"
                        bgColor={bgColor}
                        labelColor=""
                        animateOnRender={true}
                        transitionTimingFunction="linear"
                        className=''
                    />
                </div>
            </div>

        </>
    )
}
export default memo(ProgressBarComponent);