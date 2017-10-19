import React from 'react';
import ReactDom from 'react-dom';
import App from '../../src/components/App'
import renderer from 'react-test-renderer';


/**
 * Testing the components using ReactDom
 */
describe("App", ()=> {
    it("renders the app without crashing", ()=>{
        const div = document.createElement("div");
        ReactDom.render(<App />, div);
    })
});

/**
 *  Tesing components using Snapshot testing using Jest
 */

 describe("Check whether App renders correctly usign snapshot", ()=>{
     it("renders correctly", () => {
         const rendered = renderer.create(
             <App />
         )
         expect(rendered.toJSON()).toMatchSnapshot();
     })
 })