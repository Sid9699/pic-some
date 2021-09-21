import { render } from "@testing-library/react";
import { Login } from "../Login";

describe("Login Component tests", () => {

    test("should render navbar component", () => {
        const { getByTestId } = render(<Login />);
        expect(getByTestId("ps-login")).toBeInTheDocument();
    })

    test("should render Welcome Back message", () => {
        const { getByText } = render(<Login />);
        expect(getByText(/Welcome Back/i)).toBeInTheDocument();
    })

    test("should render Forgot password? message", () => {
        const { getByText } = render(<Login />);
        expect(getByText(/Forgot password?/i)).toBeInTheDocument();
    })

    test("should render New here? SignUp. message", () => {
        const { getByText } = render(<Login />);
        expect(getByText(/SignUp/i)).toBeInTheDocument();
    })

})