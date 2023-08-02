import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as PiIcons from 'react-icons/pi';
import * as GiIcons from 'react-icons/gi';
import * as SiIcons from'react-icons/si';
export const SidebarData = [
    {
        title: 'Films',
        path: '/films',
        icon: <AiIcons.AiFillFolder />,
        iconClosed: < AiIcons.AiOutlineDown/>,
        iconOpened: < MdIcons.MdArrowForwardIos/>,
        subNav: [
            {
                title: 'Movies1',
                path: '/films/movies1',
                icon: <PiIcons.PiFilmReelLight />,
            },
            {
                title: 'Movies2',
                path: '/films/movies2',
                icon: <PiIcons.PiFilmReelLight />,
            },
        ]  
    },
    {
        title: 'People',
        path: '/people',
        icon: <AiIcons.AiFillFolder />,
        iconClosed: < AiIcons.AiOutlineDown/>,
        iconOpened: <MdIcons.MdOutlineArrowForwardIos />,
        subNav: [
            {
                title: 'Males',
                path: '/people/Males',
                icon: <PiIcons.PiFilmReelLight />,
            },
            {
                title: 'Females',
                path: '/people/Females',
                icon: <PiIcons.PiFilmReelLight />,
            },
        ]  
    },
    {
        title: 'Planets',
        path: '/planets',
        icon: <AiIcons.AiFillFolder />,
        iconClosed: < AiIcons.AiOutlineDown/>,
        iconOpened: <MdIcons.MdArrowForwardIos />,
        subNav: [
            {
                title: 'planet1',
                path: '/planets/planet1',
                icon: <GiIcons.GiExplodingPlanet/>,
            },
            {
                title: 'planet2',
                path: '/planets/planet2',
                icon: < GiIcons.GiExplodingPlanet/>,
            },
        ] 
    },
    {
        title: 'Species',
        path: '/species',
        icon: <AiIcons.AiFillFolder />,
        iconClosed: < AiIcons.AiOutlineDown/>,
        iconOpened: <MdIcons.MdOutlineArrowForwardIos />,
        subNav: [
            {
                title: 'Top20',
                path: '/species/top20',
                icon: <PiIcons.PiAlienLight />,
            },
            {
                title: 'More',
                path: '/species/more',
                icon: <PiIcons.PiAlienLight />,
            },
        ]  
    },
    {
        title: 'Vehicles',
        path: '/vehicles',
        icon: <AiIcons.AiFillFolder />,
        iconClosed: < AiIcons.AiOutlineDown/>,
        iconOpened: <MdIcons.MdOutlineArrowForwardIos />,
        subNav: [
            {
                title: 'Air',
                path: '/vehicles/air',
                icon: <PiIcons.PiAirplaneTiltBold />,
            },
            {
                title: 'Aquatic',
                path: '/vehicles/aquatic',
                icon: <FaIcons.FaShip />,
            },
            {
                title: 'Ground',
                path: '/vehicles/ground',
                icon: <GiIcons.GiGreatWarTank/>,
            },
        ] 
    },
    {
        title: 'Star Ships',
        path: '/starships',
        icon: <AiIcons.AiFillFolder />,
        iconClosed: < AiIcons.AiOutlineDown/>,
        iconOpened: <MdIcons.MdOutlineArrowForwardIos />,
        subNav: [
            {
                title: 'Star Fighter',
                path: '/starships/starfighter',
                icon: <SiIcons.SiStarship />,
            },
            {
                title: 'Space Stations',
                path: '/starships/spacestations',
                icon: <SiIcons.SiStarship  />,
            },
        ]
    },
]
 