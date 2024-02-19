import React from 'react';


export interface ITrendingProps {
    name: string;
};
 
const Trending : React.FunctionComponent<ITrendingProps> = ({ name }) => {
    return (
        <div>
            <h1>Trending  {name}!</h1>
        </div>
    );
}
 
export default Trending;