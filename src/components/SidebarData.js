import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Complaints',
        path: '/complaints',
        icon: <IoIcons.IoMdLogIn />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Update Profile',
    //     path: '/CreateAccount',
    //     icon: <IoIcons.IoMdCreate />,
    //     cName: 'nav-text'
    // }
    // ,
    // {
    //     title: 'Complaint',
    //     path: '/Complaint',
    //     icon: <IoIcons.IoMdCreate />,
    //     cName: 'nav-text'
    // }
    // ,
    {
        title: 'Extras',
        path: '/extras',
        icon: <IoIcons.IoMdCreate />,
        cName: 'nav-text'
    }


];