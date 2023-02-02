import  React  from 'react';


type Testprops = {
    test:string;
};

export  const Test = ({test}: Testprops) =>{
    return (
        <div>
            {test}
        </div>
    )
}