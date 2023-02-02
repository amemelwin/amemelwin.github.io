// import { useState } from 'react';
import MenuIcon from '@components/rive/MenuIcon';
import LogoComponent from '@components/Header/LogoComponent';
import NavtabsComponent from '@components/Header/NavtabsComponent';
import MDropDown from '@components/Header/MDropDown';
import { useState, useRef, memo, useEffect } from 'react';

export const PrimaryNavbar = memo(({ dark, isDrop, setIsDrop, setOldScrollPos, scrollPosition, portfolioY, introY, showScroll, educationY, contactY, setScrollPosition }: any) => {
    // const [isDrop, setIsDrop] = useState(false);
    const navItems = [
        {
            name: 'Info',
            active: scrollPosition >= 0 && scrollPosition + 100 < portfolioY - 1 ? true : false,
            onClick: () => {
                window.scroll(0, 0);
                setIsDrop(false);
            }
        },

        {
            name: 'Portfolio',
            active: scrollPosition + 100 >= portfolioY && scrollPosition + 100 < educationY ? true : false,
            onClick: () => {
                // window.scroll(portfolioY, educationY - 1);
                // setOldScrollPos(portfolioY + 1);
                console.log('set port :', portfolioY + 1)
                window.scroll(0, portfolioY + 1);
                setIsDrop(false);
            }

        },
        {
            name: 'Education',
            active: scrollPosition + 100 >= educationY && scrollPosition + 100 < (educationY + (((contactY - educationY) / 2) / 3)) ? true : false,
            onClick: () => {
                // setScrollPosition(educationY);
                // setOldScrollPos( educationY + 1);
                window.scroll(0, educationY + 1);
                setIsDrop(false);
            }

        },
        {
            name: 'Contact',
            active: scrollPosition + 100 >= (educationY + ((contactY - educationY) / 2)) ? true : false,
            onClick: () => {
                // setOldScrollPos( contactY + 1);
                window.scroll(0, contactY + 1);
                setIsDrop(false);
            }
        },
    ];
    return (<>
        <div className={`${showScroll || scrollPosition < 500 ? 'fixed' : 'hidden'} top-0 w-full h-[48px] md:h-[66px] bg-slate-800 z-50`}>
            {/* bg-[#433f47] */}
            <div className='flex flex-row container mx-auto justify-between h-full items-center  '>
                <LogoComponent dark={dark} isDrop={isDrop} setIsDrop={setIsDrop} />
                <div className='hidden md:flex'>
                    <NavtabsComponent navItems={navItems} />
                </div>
                <div className='flex md:hidden'>
                    <MenuIcon setIsDrop={setIsDrop} isDrop={isDrop} dark={dark} />
                </div>
            </div>
            {/* <div className='flex md:hidden bg-gray-400 w-screen h-52'> */}
            <MDropDown isOpen={isDrop} setIsDrop={setIsDrop} navItems={navItems} />
            {/* </div> */}
        </div>
    </>

    )
})







