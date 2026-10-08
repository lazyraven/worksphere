// import { useState } from 'react';
import {NavLink} from 'react-router-dom';

// const menuItems = [
//     'Dashboard',
//     'Projects',
//     'Tasks',
//     'Analytics',
//     'Settings'
// ]

const menuItems = [
    {
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        label: 'Projects',
        path: '/projects'
    },
    {
        label: 'Tasks',
        path: '/tasks'
    },
    {
        label: 'Analytics',
        path: '/analytics'
    },
    {
        label: 'Settings',
        path: '/settings'
    },
    {
        label: 'Reports',
        path: '/reports'
    }
];

function Sidebar() {
    // const [activeItem, setActiveItem] = useState('Dashboard')

    return (
        <aside className="sidebar">
            <h2>WorkSphere</h2>
            <nav>
                {/* this should be return - i mistake here take small bractets in map so that it'll take return */}
                {menuItems.map((item) => (
                    <NavLink key={item.path}
                        to={item.path}
                        className={({isActive})=>isActive ? 'nav-link active' : 'nav-link'}
                    >
                        {item.label}
                    </NavLink>

                    // <button key={item}
                    // onClick={()=>setActiveItem(item)}
                    // >
                    //     {item}
                    // </button>
                ))
                }
            </nav>
            {/* <p>selected: {activeItem}</p>

            {activeItem === 'Dashboard' && (
                <p>Viewing your dashboard</p>
            )}

            {activeItem === 'Projects' && (
                <p>You are viewing projects.</p>
            )}

            {activeItem === 'Tasks' && (
                <p>You are viewing tasks.</p>
            )
            } */}
        </aside>
    )
}

export default Sidebar;