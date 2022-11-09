import { render, screen } from "@testing-library/react";
// import { shallow } from "enzyme";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe("App", () => {
//   it("should render a form with two input fields and a submit button", () => {
//     const wrapper = render(<App />);
//     expect(wrapper.baseElement("form").length).toEqual(1);
//     expect(wrapper.find("input").length).toEqual(2);
//     expect(wrapper.find("button").length).toEqual(1);
//   });

//   it("should have an initial state of result as an empty string", () => {
//     const wrapper = render(<App />);
//     expect(wrapper.state("result")).toEqual("");
//   });

//   it("should update the state of result when the form is submitted", () => {
//     const wrapper = render(<App />);
//     const event = { preventDefault: () => {} };
//     const spy = jest.spyOn(event, "preventDefault");
//     wrapper.find("form").simulate("submit", event);
//     expect(spy).toHaveBeenCalled();
//   });
// });
