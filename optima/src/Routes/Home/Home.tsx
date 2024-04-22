import { Link, Outlet } from 'react-router-dom'
import cardPhoto from '../../assets/react.svg'
import './Home.css'
import Card from '../../Components/Card/Card'
import { useState } from 'react'
export default function Home() {
    const [route, setRoute] = useState<string>('Home');
    function handleRoute(route: string): void {
        setRoute(route)
    }

    return (
        <div>
            {route === 'home' ?
                <div>

                    <h1>Home</h1>

                    <ul style={{ display: 'flex', flexDirection: 'row' }}>
                        <li><Link to='/linear' onClick={() => handleRoute('linear')}><Card title='Linear Optimizer' subtitle='ths is linear optimizer description' img={cardPhoto} background='orange' /></Link></li>
                        <li><Link to='/non-linear' onClick={() => handleRoute('non-linear')}><Card title='Non Linear Optimizer' subtitle='ths is non-linear optimizer description' img={cardPhoto} background='green' /></Link></li>
                        <li><Link to='/discrete' onClick={() => handleRoute('discrete')}><Card title='Discrete Optimizer' subtitle='ths is discrete optimizer description' img={cardPhoto} background='wheat' /></Link></li>
                    </ul>
                </div>
                :
                <nav>
                    <li><Link onClick={() => handleRoute('home')} to='/'>Home</Link></li>
                    <li><Link onClick={() => handleRoute('linear')} to='/linear'>Linear Optimizer</Link></li>
                    <li><Link onClick={() => handleRoute('non-linear')} to='/non-linear'>Non-Linear Optimizer</Link></li>
                    <li><Link onClick={() => handleRoute('discrete')} to='/discrete'>Discrete Optimizer</Link></li>

                </nav>
            }


            {route != 'home' &&
                <div className='outlet'>
                    <Outlet />
                </div>
            }

        </div>
    )
}