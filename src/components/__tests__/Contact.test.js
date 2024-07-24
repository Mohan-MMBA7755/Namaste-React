
import { getByPlaceholderText, render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases",()=>{
    it("Should load Contact Us Component",()=>{

        render(<Contact/>);
        //Querying
         const inputBoxes = screen.getAllByRole("textbox");
            //console.log(inputBoxes);
    
        //Assertions
         expect(inputBoxes.length).toBe(2);
    
    });
    
    it("Should load Button inside Contact Us Component",()=>{
    
        render(<Contact/>);
    
         const b = screen.getByRole("button");
    
         expect(b).toBeInTheDocument();
    
    });
     
    it("Should load the Button text from Contact Componenet",()=>{
        render(<Contact/>);
    
        const buttonText = screen.getByText("Submit");
    
        expect(buttonText).toBeInTheDocument();
    });
    
    it("should load placeholder text of Input Element",()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    });
})

