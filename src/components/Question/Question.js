import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='div'>
            <h1>React Question</h1>
            <div className="question">

               <div className="left">
<                     h2>1. What is the difference between props and state ?</h2>
                      <p>
                      Props and state are related. One of the major difference between props and state
                      is that state is internally controlled by the component at own and props works 
                        externally and are controlled by whatever renders the component. Props are
                        immutable and state is mutable. State has a limitation to the current component 
                        but props can be passed to any component.In comparison props have better 
                        performance than state.
                      </p>
               </div>
               <div className="right">
               <h2>2. How does UseState works ?</h2>
                      <p>
                      Usestate is a react hook which lets you to add state to function components.
                    They tends to start with 'use'. After we pass the initial state to a function
                    it returns a variable with the current state value and lets another function to
                    update this value. It runs after
                    every render by default.We can use multiple states inside a single component.
                      </p>
               </div>
           </div>
           </div>
    );
};

export default Question;