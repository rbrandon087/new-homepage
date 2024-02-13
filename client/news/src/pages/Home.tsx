import React from 'react';
import Navbar from '../components/Navbar';
import Shapes from '../images/shapes.jpg'
import '../styles/Home.css';


export interface IHomeProps {
    name: string;
    paragraph: string;
};
 
const Home : React.FunctionComponent<IHomeProps> = ({ name, paragraph }) => {
    return (
        <div>
            <h1> {name}</h1>
            <p>{paragraph}</p>
            <img className='shapes-image' src={Shapes}
            alt="Shape image"
            />
        </div>
    );
}
 
export default Home;