import { Link } from "react-router-dom";
import styled from "styled-components";

function Recommends() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWODzlKwPS5HvgWeQZeabfBDmNCLSiMVfrD-iIrxP5DqT3GyhPtZnLg9dvBZkCOm7gvVevbkuuBqoubkQq94OPI3kZ8Q4vJWxbYWlaVAKj7N5vN6l38LFwDwavzTqCsLN6_R.jpg?r=686"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWODzlKwPS5HvgWeQZeabfBDmNCLSiMVfrD-iIrxP5DqT3GyhPtZnLg9dvBZkCOm7gvVevbkuuBqoubkQq94OPI3kZ8Q4vJWxbYWlaVAKj7N5vN6l38LFwDwavzTqCsLN6_R.jpg?r=686"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWODzlKwPS5HvgWeQZeabfBDmNCLSiMVfrD-iIrxP5DqT3GyhPtZnLg9dvBZkCOm7gvVevbkuuBqoubkQq94OPI3kZ8Q4vJWxbYWlaVAKj7N5vN6l38LFwDwavzTqCsLN6_R.jpg?r=686"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWODzlKwPS5HvgWeQZeabfBDmNCLSiMVfrD-iIrxP5DqT3GyhPtZnLg9dvBZkCOm7gvVevbkuuBqoubkQq94OPI3kZ8Q4vJWxbYWlaVAKj7N5vN6l38LFwDwavzTqCsLN6_R.jpg?r=686"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scaleX(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommends;
