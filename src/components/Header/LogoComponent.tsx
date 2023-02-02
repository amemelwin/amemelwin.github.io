import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect, memo } from 'react';
interface MenuIconProps {
    setIsDrop: (isDrop: boolean) => void,
    isDrop: boolean,
    dark: string
}
const LogoComponent = ({ dark }: MenuIconProps) => {
    const logo = require('@assets/rive/nav_logo.riv');
    const stateMachines = "Logo";
    const stateName = "dark";
    const params = {
        src: logo,
        stateMachines: stateMachines,
        autoplay: true,
    }
    const { rive, RiveComponent } = useRive(params);
    const dropInput = useStateMachineInput(rive, stateMachines, stateName, true);
    return (<>
        <div
            className="w-8 h-8">
            <RiveComponent width="100%" />
        </div>
    </>
    )
}
export default memo(LogoComponent);