'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector} from "react-redux";

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Products',
        href: '/products',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
    {
        name: 'About',
        href: '/about',
    },
]

export function HeaderMain() {
    const { user } = useSelector((state) => state.user);

    return (
        <div className="relative w-full bg-white mt-2">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <Link to="/">
                    <div className="inline-flex items-center space-x-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                            </svg>

                        </span>
                        <span className="font-bold">DigiShop</span>
                    </div>
                </Link>
                <div className="hidden lg:block">
                    <ul className="ml-12 inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        <li className='flex justify-center items-center'>
                            <Link to="Cart" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                                </svg>


                            </Link>
                        </li>
                        <li className='flex justify-center items-center'>
                              <Link
                                to={user ? "/account" : "/login"}
                                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                            >
                                {user ? <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                </svg>

                                </> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                                }
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
