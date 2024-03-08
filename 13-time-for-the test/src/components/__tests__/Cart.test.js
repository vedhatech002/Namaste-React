import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaruntMenu from "../RestaruntMenu";
import MOCK_DATA from "../mocks/resMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaruant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaruntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended(20)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItemCard").length).toBe(20);

  expect(screen.getByText("Cart -(0-items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart -(1-items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart -(2-items)")).toBeInTheDocument();

  //check cart page has food 2 card
  expect(screen.getAllByTestId("cartItem").length).toBe(2);

  //clear cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(
    screen.getByText("Cart is empty please order items")
  ).toBeInTheDocument();
});
