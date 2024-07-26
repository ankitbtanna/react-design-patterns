import styled from "@emotion/styled/macro";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Pane = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ children }) => {
  const [ left, right ] = children;
  return (
    <Container>
        <Pane>
            {left}
        </Pane>
        <Pane>
            {right}
        </Pane>
    </Container>
  );
};
