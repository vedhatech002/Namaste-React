import { render, screen } from "@testing-library/react";
import RestaruntCard from "../RestaruntCard";
import RES_DATA from "../mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Restaruant components with props Data", () => {
  render(
    <BrowserRouter>
      <RestaruntCard resData={RES_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Sri Gowri Krishna");

  expect(name).toBeInTheDocument();
});
