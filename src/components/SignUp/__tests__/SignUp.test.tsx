import { render } from "@testing-library/react";
import { SignUp } from "../SignUp";

describe("SignUp Component tests", () => {

    test("should render navbar component", () => {
        const { getByTestId } = render(<SignUp />);
        expect(getByTestId("ps-signup")).toBeInTheDocument();
    })

    test("should render Welcome Back message", () => {
        const { getByText } = render(<SignUp />);
        expect(getByText(/Welcome Back/i)).toBeInTheDocument();
    })

    test("should render Forgot password? message", () => {
        const { getByText } = render(<SignUp />);
        expect(getByText(/Forgot password?/i)).toBeInTheDocument();
    })

    test("should render New here? SignUp. message", () => {
        const { getByText } = render(<SignUp />);
        expect(getByText(/SignUp/i)).toBeInTheDocument();
    })

})