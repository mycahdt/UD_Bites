import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the word UD somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD/i);
    expect(linkElement).toBeInTheDocument();
});
