import React from 'react';


export interface ICategoriesProps {
    name: string;
};
 
const Categories : React.FunctionComponent<ICategoriesProps> = ({ name }) => {
    return (
        <div>
            <h1>Categories  {name}!</h1>
        </div>
    );
}
 
export default Categories;