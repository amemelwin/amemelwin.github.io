const Local = {
    toggleTheme: ({ dark, dispatch, setDarkMode }: any) => {
        const html = document.getElementById('html');
        if (dark === 'dark') {
            html?.setAttribute('class', 'light');
            localStorage.setItem('dark', 'light');
            dispatch(setDarkMode('light'));
        } else {
            html?.setAttribute('class', 'dark');
            localStorage.setItem('dark', 'dark');
            dispatch(setDarkMode('dark'));
        }
    }
}
export default Local; 