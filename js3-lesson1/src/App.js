import React from "react";
/* import Section from "./components/Section"; */
import Section2 from "./components/Section2";

/* const myData = [
  {title: "Hello World 1", subTitle: "123", text: "Lorem ipsum"},
  {title: "Welcome to my World", subTitle: "456", text: "123"},
  {title: "This is me", subTitle: "789",text: "Pelle"},
  {title: "John Doe", subTitle: "abc", text: "John Doe"}
] */

function App() {
  return (
    <div className="section">
      {/* {
        myData.map((item, index) => {
          return <Section 
            key={index}
            title={item.title} 
            subTitle={item.subTitle} 
            text={item.text}
          />
        })
      } */}
      <Section2 
        title="Welcome"

        src="https://images.unsplash.com/photo-1638000705481-71cfe591308a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=cameron-voyce-7P7dD6hyvms-unsplash.jpg" 
        alt="A beautiful view" 
        width="1000px"

        text="Click here"

        type="text"
        placeholder="Write something"

        href="https://run.wunderpresentation.com/61a48ab6d4156b43835f28c0#12,0"
        target="_blank"

      />
    </div>
  );
}

export default App;
