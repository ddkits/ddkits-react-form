import { render, screen } from "@testing-library/react";
import App from "./App";
/* eslint-disable */
it("DDKits Form testing", async () => {
  render(<App />);
  setTimeout(() => {
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
  }, 500);
});
/* eslint-enable */
