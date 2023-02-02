import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { Dispatch, memo, SetStateAction, useEffect } from 'react';
interface LoadingProps {
    dark: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>
}
const LoadingComponent = ({ dark, setIsLoading }: LoadingProps) => {
    const logo = dark === 'dark' ? require('@assets/rive/nav_logo.riv') : require('@assets/rive/logo.riv');
    const stateMachines = "Logo";
    const stateName = "dark";
    const params = {
        src: logo,
        stateMachines: stateMachines,
        autoplay: true
    }
    const { rive, RiveComponent } = useRive(params);
    const dropInput = useStateMachineInput(rive, stateMachines, stateName, dark === 'dark' ? true : false);
    const sleep = (ms: number) => new Promise((r, e) => setInterval(r, ms));
    let seconds = 0;
    (async (name) => {
        while (seconds < 3000) {
            await sleep(1000);
            // console.log(seconds, dark);
            seconds += 1000;
        }
        // console.log('end loop ', name);
        setIsLoading(false);
    })('amie');
    return (<>
        <div className="flex h-screen fle-col justify-center items-center">
            <div className="w-[75px] h-[75px]">
                <RiveComponent width="100%" />
            </div>
        </div>
    </>
    )
}
export default memo(LoadingComponent);
// {name: 'BindingError', message: 'File instance already deleted', stack: 'BindingError: File instance already deleted\n    at…tp://localhost:3000/static/js/bundle.js:36466:15)'}