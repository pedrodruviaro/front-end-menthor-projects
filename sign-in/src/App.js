import React from "react";
import Main from "./components/Main";
import FlexContainer from "./components/FlexContainer";
import Title from "./components/Titulo";
import Text from "./components/Text";
import FormContainer from "./FormContainer";
import Input from "./components/Input";
import Button from "./components/Button";
import CardText from "./components/CardText";

function App() {
  return (
    <Main>
      <FlexContainer column align="left">
        <Title left size="3em">Learn to code by watching others</Title>
        <Text left>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Text>
      </FlexContainer>

      <FlexContainer column>
        <CardText><strong>Try it free 7 days</strong> then $20/mo. thereafter</CardText>

        <FormContainer column>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Button>Claim your free trial</Button>

          <Text padding="0" size=".8rem" color="#aaa">
            By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
          </Text>
        </FormContainer>
      </FlexContainer>
    </Main>
  );
}

export default App;
