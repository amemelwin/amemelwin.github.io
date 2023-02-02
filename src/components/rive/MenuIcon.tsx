import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect,memo } from 'react';
interface MenuIconProps {
    setIsDrop: (isDrop: boolean) => void,
    isDrop: boolean,
    dark: string
}
const MenuIcon = ({ isDrop, setIsDrop, dark }: MenuIconProps) => {
    const menu = require('@assets/rive/drop.riv');
    const stateMachines = "Drop State";
    const stateName = "drop";
    const params = {
        src: menu,
        stateMachines: stateMachines,
        autoplay: true,
    }
    const { rive, RiveComponent } = useRive(params);
    const dropInput = useStateMachineInput(rive, stateMachines, stateName, isDrop);
    const dropToggle = () => {
        if (dropInput!.value) {
            setIsDrop(false);
            dropInput!.value = false;
        } else {
            setIsDrop(true);
            dropInput!.value = true;
        }
    }
    let dropStyle = 'w-8 h-8 p-1.5 overflow-hidden rounded-md flex flex-col justify-center items-center cursor-pointer  ring-1' + (dark == 'dark' ? ' ring-gray-300' : ' bg-gray-600');
    useEffect(()=>{
        if(dropInput && !isDrop){
            dropInput!.value = false;
        }
    },[isDrop,dropInput])
    return (<>
        <div
            onClick={dropToggle}
            className={`${dropStyle} `}>
            <RiveComponent width="100%" />
        </div>
    </>
    )
}
export default memo(MenuIcon);