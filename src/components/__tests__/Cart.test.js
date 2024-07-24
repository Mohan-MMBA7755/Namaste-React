import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should load Restaurant Menu Component",async()=>{
    await act(async()=>render(<BrowserRouter>
                                    <Provider store={appStore}>
                                        <Header/>
                                        <RestaurantMenu/>
                                        <Cart/>
                                    </Provider>
                                </BrowserRouter>))

    const accordianHeader = screen.getByText("Pasta(8)");

    fireEvent.click(accordianHeader);

   expect(screen.getAllByTestId("foodItems").length).toBe(8);

   expect(screen.getByText("Cart(0 items)")).toBeInTheDocument();

   const addBtn = screen.getAllByRole("button",{name:"Add+"});
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(10);
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(8);
});