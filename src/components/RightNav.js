import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    margin-top: 20px;

    li {padding: 5px 0px;}

    @media (max-width: 768px) {
            flex-flow: column nowrap;
            background: linear-gradient(150deg, #703AC7 0%, #E461B0 100%) 0% 0% no-repeat padding-box;
            position:fixed;
            transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
            transition: transform 0.3s ease-in-out;
            top: 0;
            right: 0;
            height: 100vh;
            width: 300px;
            padding-top: 3.5rem;
            z-index: 5;
            margin-top: 0px;

            

        li {
            color: white;
            padding 18px 20px;
        }
}`

const RightNav = ({open}) => {
    return (
        <div className=''>
            <Ul open={open}>
                <NavLink to="/"><li>Mes matchs</li></NavLink>
                <NavLink to="/filters"><li>Filtres</li></NavLink>
                <NavLink to="/"><li>Se déconnecter</li></NavLink>
                <NavLink to="/oops">Credits</NavLink>

            </Ul>
        </div>
    )
}
export default RightNav