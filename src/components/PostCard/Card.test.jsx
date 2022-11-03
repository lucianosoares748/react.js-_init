import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardMock } from "./mock";

const props = postCardMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(
      screen.getByRole("heading", { name: /title 1/i })
    ).toBeInTheDocument();
    expect(screen.getByText("body1")).toBeInTheDocument();
    expect(screen.getByAltText("title 1")).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
