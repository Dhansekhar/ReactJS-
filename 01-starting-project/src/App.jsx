import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import components from "./assets/components.png";
import config from "./assets/config.png";
import jsxui from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./Data";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              discrption={CORE_CONCEPTS[0].discrption}
            />
             <CoreConcept {...CORE_CONCEPTS[1]}/>
             <CoreConcept {...CORE_CONCEPTS[2]} />
             <CoreConcept {...CORE_CONCEPTS[3]}/>

            {/* <CoreConcept
              image={config}
              title={"PROPS "}
              discrption={`In React, props (short for "properties") are a fundamental mechanism for passing data from a parent component to a child component. 
                They allow you to customize and configure child components by providing them with values or functions`}
            />

            <CoreConcept
              image={jsxui}
              title={" JSX  "}
              discrption={`JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. 
                It is commonly used with React to describe what the UI should look like.
                 JSX makes it easier to write and add HTML in React applications by converting HTML tags into React elements.`}
            />

            <CoreConcept
              image={stateImg}
              title={"STATE"}
              discrption={`In React, state refers to the data that represents the current condition or values of a component.
                 It allows React components to keep track of and manage dynamic information, such as user input, 
                 API responses, or changes in the component’s internal state. 
                State is crucial for building interactive and dynamic user interfaces in React applications.`}
              // dhana={"Dhanasekhar"}
            /> */}

            {/* <Props />
          <JsxFile />
          <StateFile /> */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
