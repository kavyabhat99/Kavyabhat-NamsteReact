import React from 'react'
import ReactDOM from 'react-dom/client';
import {Heading} from './Heading'
//using core React
const heading = React.createElement("h1",{id:"heading"},"Namaste React!");
//using JSX
const JsxHeading = (<h1 className='head' tabIndex={1}>
Namaste React in JSX
</h1>)

const Title = () => (<h1 className='head' tabIndex={1}>
I am Title
</h1>)

const Reactanotherele = (<h1 className='head' tabIndex={1}>
I am React React another ele
<Title/>
</h1>)

const Reactele = (<h1 className='head' tabIndex={1}>
    {Reactanotherele}
I am React Element
</h1>)


//React functional component
const number = 1000;
const HeadingComponent = () => (
    <div id="container">
        {number}
        <h2>{number}</h2>
        <h2>{10+20}</h2>
        {Reactele}
        <h1>Namste React Functional component</h1>
        {/* These 3 things are same  */}
        <Title/>
        <Title></Title>
        {Title()}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(JsxHeading);
// console.log(heading);
// root.render(<HeadingComponent/>);

root.render(<Heading/>);
