import React from 'react';


export interface INewProps {
    name: string;
};
 
const New : React.FunctionComponent<INewProps> = ({ name }) => {
    return (
        <div>
            <h1>New  {name}!</h1>
        </div>
    );
}
 
export default New;