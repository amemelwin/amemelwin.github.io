import RouterView from './route';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks';
import Local from './store/localStorage';
import { setDarkMode, setMmTime, setJpTime, setEnTime } from './store/reducer/defaultSlice';
import LoadingComponent from './components/rive/LoadingComponent';
import './localization';
import axios from 'axios';
const App = () => {
  const html = document.getElementById('html');
  const dispatch = useAppDispatch();
  const { dark } = useAppSelector((state: any) => state.dark);
  const [isDrop, setIsDrop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isApiFetching, setIsApiFetching] = useState(false);
  let inLoop = false; 
  const toggleTheme = () => {
    // dark, dispatch, setDark
    Local.toggleTheme({ dark, dispatch, setDarkMode });
  };
  const screenProps = {
    isDrop, setIsDrop, toggleTheme, dark
  }
  const sleep = (ms: number) => new Promise((r, e) => setInterval(r, ms));
  const startApiFetching = async () => {
    if (!inLoop) {
      inLoop = true;
      axios.get("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
        .then(({ data: { datetime } }: any) => dispatch(setJpTime(datetime)));
      axios.get("https://worldtimeapi.org/api/timezone/Europe/London")
        .then(({ data: { datetime } }: any) => dispatch(setEnTime(datetime)));
      while (inLoop) {
        axios.get("https://worldtimeapi.org/api/timezone/Asia/Yangon")
          .then(({ data: { datetime } }: any) => dispatch(setMmTime(datetime)));
        await sleep(20000);
        axios.get("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
          .then(({ data: { datetime } }: any) => dispatch(setJpTime(datetime)));
        await sleep(20000);
        axios.get("https://worldtimeapi.org/api/timezone/Europe/London")
          .then(({ data: { datetime } }: any) => dispatch(setEnTime(datetime)));
        await sleep(20000);

      }
    }
  }
  useEffect(() => {
    //take data from localstorage & set store and html 
    html?.setAttribute('class', dark);
    if (!isApiFetching) {
      setIsApiFetching(true);
      startApiFetching();
    }

  }, [isApiFetching]);

  return (
    <div className='text-[#0a192f] font-roboto bg-white dark:text-white dark:bg-[#0a192f]'>
      {isLoading ?
        <LoadingComponent dark={dark} setIsLoading={setIsLoading} />
        : <RouterView screenProps={screenProps} />}
      {/* <div className='absolute'>{isLoading? 'loading . . .': 'off . . .'}</div> */}
    </div>
  );
};
export default App;