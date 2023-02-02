import { memo, useEffect, useState } from 'react';
const ClockComponent = ({ hrMin }: any) => {
    const [h, m] = hrMin.split(':');
    useEffect(() => {
        let minElement = document.getElementById('min');
        let hourElement = document.getElementById('hour');
        minElement?.setAttribute('style', `transform: rotate(${parseInt(m) * 6 - 92}deg);transform-origin: left`);
        hourElement?.setAttribute('style', `transform: rotate(${(parseInt(h) * 30 + Math.floor(parseInt(m) * 0.5)) - 92}deg);transform-origin: left`);
    }, [hrMin]);
    return (
        <div className="w-[110px] h-[110px] flex flex-col justify-center items-center relative">
            {/* Amie logo */}
            <div className="absolute left-[45px] top-[65px] w-[5px] h-[5px] text-gray-100 text-sm font-bold font-dancing">Amie</div>
            {/* circle */}
            <div className='w-[110px] h-[110px] border-2 rounded-full border-gray-500'></div>
            {/* ring */}
            <div className='absolute w-[6px] h-[6px] left-[55px] top-[54px] border-[2px] rounded-full bg-white'></div>

            {/* minute leg */}
            <div id='min' className={`absolute w-[40px] h-[3px] flex left-[58px] top-[55.5px] pl-[2px] z-30`}>
                <div className='flex-1 bg-gradient-to-tr from-blue-400 w-fit'></div>
            </div>
            {/* hour leg */}
            <div id='hour' className={`absolute w-[25px] h-[4px] flex left-[58px] top-[55px] pl-[2px] z-40`}>
                <div className='flex-1 bg-gradient-to-tr from-amber-500 w-fit'></div>
            </div>
            {/* {
                data.map( style => {
                    return <div className={style}></div>
                })
            } */}
            {/* 12 */}
            <div className="absolute left-[54px] top-[5px] w-[5px] h-[5px] bg-gray-100"></div>
            <div className="absolute left-[47px] top-[10px] w-[5px] h-[5px] text-gray-400 text-[10px] z-20">XII</div>
            <div className="absolute left-[78px] top-[13px] w-[4px] h-[4px] bg-gray-400"></div>
            <div className="absolute left-[95px] top-[32px] w-[4px] h-[4px] bg-gray-400"></div>
            {/* 3 */}
            <div className='absolute left-[100px] top-[55px] w-[5px] h-[5px] bg-gray-200'></div>
            <div className="absolute left-[79px] top-[50px] w-[5px] h-[5px] text-gray-400 text-[10px] z-20">III</div>
            <div className="absolute left-[95px] top-[77px] w-[4px] h-[4px] bg-gray-400"></div>
            <div className="absolute left-[78px] top-[93px] w-[4px] h-[4px] bg-gray-400"></div>
            {/* 6 */}
            <div className="absolute left-[55px] top-[100px] w-[5px] h-[5px] bg-gray-100"></div>
            <div className="absolute left-[51px] top-[85px] w-[5px] h-[5px] text-gray-400 text-[10px] z-20">VI</div>
            <div className="absolute left-[31px] top-[94px] w-[4px] h-[4px] bg-gray-400"></div>
            <div className="absolute left-[12px] top-[77px] w-[4px] h-[4px] bg-gray-400"></div>
            {/* 9 */}
            <div className="absolute left-[5px] top-[55px] w-[5px] h-[5px] bg-gray-100"></div>
            <div className="absolute left-[12px] top-[50px] w-[5px] h-[5px] text-gray-400 text-[10px] z-20">IX</div>
            <div className="absolute left-[10px] top-[32px] w-[4px] h-[4px] bg-gray-400"></div>
            <div className="absolute left-[28px] top-[13px] w-[4px] h-[4px] bg-gray-500"></div>
        </div>
    )
}
export default memo(ClockComponent);
/*
const hourLegs: Array<any> = [
    { w: 30, h: 4,deg: 0 },
    { w: 30, h: 4,deg: 30 },
    { w: 30, h: 4,deg: 60 },
    { w: 30, h: 4,deg: 90 },
    { w: 30, h: 4,deg: 120 },
    { w: 30, h: 4,deg: 150 },
    { w: 30, h: 4,deg: 180 },
    { w: 30, h: 4,deg: 210 },
    { w: 30, h: 4,deg: 240 },
    { w: 30, h: 4,deg: 270 },
    { w: 30, h: 4,deg: 300 },
    { w: 30, h: 4,deg: 330 },
    { w: 30, h: 4,deg: 360 }
];
interface getGeoProps {
    deg: number
}
const getGeo = ({deg}:getGeoProps):any=>{
    const radius = 50; const center = 74;
    // coordinate x = radius * cos(radian), y = radius * sin(radian);
    // where, Radians = Degrees × (π/180);
    const x = center + Math.floor( radius * Math.cos(deg*(Math.PI/180)));
    const y = center + Math.floor( radius * Math.sin(deg*(Math.PI/180)));
    console.log(radius * Math.cos(deg*(Math.PI/180)),' - ',radius * Math.sin(deg*(Math.PI/180))) 
    console.log(x,' - ',y) 
    console.log(`absolute left-[${Math.floor(x)}px] top-[${Math.floor(y)}px] w-[5px] h-[5px] rounded-full bg-dark`);
    return `absolute left-[${x}px] top-[${y}px] w-[5px] h-[5px] bg-dark`;
}
const data = hourLegs.map(({deg})=>{
    return getGeo({deg});
});
*/