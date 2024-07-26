import styled from "@emotion/styled/macro";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Pane = styled.div`
  flex: ${props => props.weight};
`;

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [ left, right ] = children;
  return (
    <Container>
        <Pane weight={leftWeight}>
            {left}
        </Pane>
        <Pane weight={rightWeight}>
            {right}
        </Pane>
    </Container>
  );
};
