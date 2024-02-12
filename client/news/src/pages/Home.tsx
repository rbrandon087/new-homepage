import React from 'react';
import Navbar from '../components/Navbar';


export interface IHomeProps {
    name: string;
    paragraph: string;
};
 
const Home : React.FunctionComponent<IHomeProps> = ({ name, paragraph }) => {
    return (
        <div>
            <h1>W. {name}</h1>
            <p> yoo!{paragraph}</p>
        </div>
    );
}
 
export default Home;