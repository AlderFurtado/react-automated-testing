import { render, screen, fireEvent } from "@testing-library/react";
import FormLogin from "./index";

describe("Tests FormLogin component", () => {
  describe("tests display elements", () => {
    it("should display input email element", () => {
      render(<FormLogin />);
      const inputEmail = screen.getByTestId("email");
      expect(inputEmail).toBeInTheDocument();
    });

    it("should display input password element", () => {
      render(<FormLogin />);
      const inputPassword = screen.getByTestId("password");
      expect(inputPassword).toBeInTheDocument();
    });
  });

  describe("user interacte with form login", () => {
    it("should be able to enable the button if the user accesses with valid credential", () => {
      render(<FormLogin />);
      const inputEmail = screen.getByTestId("email");
      const inputPassword = screen.getByTestId("password");
      const btnInputSubmit = screen.getByTestId("btnSubmit");

      fireEvent.change(inputEmail, { target: { value: "teste@teste.com" } });
      fireEvent.change(inputPassword, {
        target: { value: "123456" },
      });
      expect(btnInputSubmit).not.toBeDisabled();
    });
  });
});
