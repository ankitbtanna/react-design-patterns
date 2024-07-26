import styled from "@emotion/styled/macro";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Pane = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <Container>
        <Pane>
            <Left />
        </Pane>
        <Pane>
            <Right />
        </Pane>
    </Container>
  );
};
