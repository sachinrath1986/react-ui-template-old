import { render } from "@testing-library/react";
import * as ReactRedux from "react-redux";
import Aside from "./Aside";

jest.mock("../brand/Brand", () => () => <div>Mock Brand component</div>);
jest.mock("../aside-menu/AsideMenu", () => () => (
  <div>Mock AsideMenu component</div>
));

describe("Main", () => {
  const useSelectorSpy = jest.spyOn(ReactRedux, "useSelector");

  it("renders snapshots when isSidebarCollapsed=true", () => {
    useSelectorSpy.mockReturnValue({
      app: {
        isSidebarCollapsed: true,
      },
    });
    const { container } = render(<Aside />);
    expect(container).toMatchSnapshot();
  });

  it("renders snapshots when isSidebarCollapsed=false", () => {
    useSelectorSpy.mockReturnValue({
      app: {
        isSidebarCollapsed: false,
      },
    });
    const { container } = render(<Aside />);
    expect(container).toMatchSnapshot();
  });
});
