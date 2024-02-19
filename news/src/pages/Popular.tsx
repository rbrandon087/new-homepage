import React from 'react';


export interface IPopularProps {
    name: string;
};
 
const Popular : React.FunctionComponent<IPopularProps> = ({ name }) => {
    return (
        <div>
            <h1>Popular  {name}!</h1>
        </div>
    );
}
 
export default Popular;