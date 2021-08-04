import { render } from "@testing-library/react";
import Main from "./Main";

jest.mock("./aside/Aside", () => () => <div>Mock Aside component</div>);

describe("Main", () => {
  it("renders snapshots", () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
