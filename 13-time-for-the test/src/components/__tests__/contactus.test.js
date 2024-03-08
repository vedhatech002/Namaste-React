import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("contact us page test Case", () => {
  beforeAll(() => {
    // console.log("before all");
  });

  beforeEach(() => {
    // console.log("before each");
  });

  afterAll(() => {
    // console.log("after all");
  });

  afterEach(() => {
    // console.log("after each");
  });

  it(" should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside my contact component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    //assertion
    expect(button).toBeInTheDocument();
  });

  test("should load submit text inside my contact component", () => {
    render(<ContactUs />);

    const submit = screen.getByText("Submit");

    //assertion
    expect(submit).toBeInTheDocument();
  });
  test("should load input name text inside my contact component", () => {
    render(<ContactUs />);

    const name = screen.getByPlaceholderText("name");

    //assertion
    expect(name).toBeInTheDocument();
  });

  test("should load 2 input boxes on the contact component", () => {
    render(<ContactUs />);

    //query
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length); //=> RETURNS REACT ELEMENT OR REACT FIBERNODE OR JSX
    //assertion

    expect(inputBoxes.length).toBe(2);
  });
});
