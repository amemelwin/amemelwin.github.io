import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomeScreen from '@screens/HomeScreen';

enum RouteName {
    home= '/',
}

const RouterView = ({screenProps}:any)=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteName.home} element={<HomeScreen {...screenProps} />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouterView;
