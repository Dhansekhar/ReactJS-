import componentImg from "./assets/components.png";
import configImg from "./assets/config.png";
import jsxuiImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
export const  CORE_CONCEPTS=[
    {
        image:componentImg,
        title:"COMPONENTS",
        discrption:`Components in ReactJS are the fundamental building blocks for 
                creating user interfaces. They allow developers to break down complex UIs into smaller, 
                reusable pieces, making the development process more efficient and scalable.`
    },
    {
        image:configImg,
        title:"PROPS ",
        discrption:`In React, props (short for "properties") are a fundamental mechanism for passing data from a parent component to a child component. 
                They allow you to customize and configure child components by providing them with values or functions`
    },
     {
        image:jsxuiImg,
        title:"JSX",
        discrption:`JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. 
                It is commonly used with React to describe what the UI should look like.
                 JSX makes it easier to write and add HTML in React applications by converting HTML tags into React elements.`
    },
     {
        image:stateImg,
        title:"STATE",
        discrption:`In React, state refers to the data that represents the current condition or values of a component.
                 It allows React components to keep track of and manage dynamic information, such as user input, 
                 API responses, or changes in the component’s internal state. 
                State is crucial for building interactive and dynamic user interfaces in React applications.`
    }

];