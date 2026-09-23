import {useState} from 'react'
const menuItems = [
    'Dashboard',
    'Projects',
    'Tasks',
    'Analytics',
    'Settings'
]

function Sidebar() {
const [activeItem, setActiveItem] = useState('Dashboard')

    return (
        <aside className="sidebar">
            <h2>WorkSphere</h2>
            <nav>
                {/* this should be return - i mistake here take small bractets in map so that it'll take return */}
                {menuItems.map((item) => (
                    <button key={item}
                    onClick={()=>setActiveItem(item)}
                    >
                        {item}
                    </button>
                ))
                }
            </nav>
            <p>selected: {activeItem}</p>

            {activeItem ==='Dashboard' && (
                <p>Viewing your dashboard</p>
            )}

            {activeItem ==='Projects' && (
                <p>You are viewing projects.</p>
            )}

            {activeItem === 'Tasks' &&(
                <p>You are viewing tasks.</p>
            )
            }
        </aside>
    )
}

export default Sidebar;