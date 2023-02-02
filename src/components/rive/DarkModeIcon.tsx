
import { StateMachineInput, useRive, useStateMachineInput } from '@rive-app/react-canvas';
const DarkModeIcon = ({ toggleTheme, dark }: any) => {
    const bulb = require('@assets/rive/bulb.riv');
    const stateMachine = "Dark State";
    const input_name = "dark";
    const params = {
        src: bulb,
        stateMachines: stateMachine,
        autoplay: true,
    };
    const { rive, RiveComponent } = useRive(params);
    const darkInput: StateMachineInput | null = useStateMachineInput(rive, stateMachine, input_name, dark == 'dark' ? 1 : 0);
    const darkToggle = () => {
        toggleTheme();
        if (dark == 'dark') {
            darkInput!.value = 0;
        } else {
            darkInput!.value = 1;
        }
    };
    let bulbStyle = 'w-[48px] h-[48px] md:w-[56px] md:h-[56px] p-2 overflow-hidden rounded-full flex flex-col justify-center items-center cursor-pointer  shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-700' + (dark == 'dark' ? ' bg-gray-300' : ' bg-gray-600');
    return (
        <div onClick={darkToggle}
            className={bulbStyle}>
            <RiveComponent />
        </div>
    )
}
export default DarkModeIcon;