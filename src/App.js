import React, { useState } from 'react';
import styled from 'styled-components'
import posed from 'react-pose'

const Page = styled.div({
  height: "100vh",
  width: "100%",
  backgroundColor: "#9BF3F0",

  display: "flex",
  justifyContent: "center"
})

const Row = styled.div({
  display: "flex",
  alignItems: "center",

  "> :not(:last-child)": {
    marginRight: 8
  }
})

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "64px 32px",
})

const ToggleStyle = styled.div({
  width: 75,
  height: 25,
  borderRadius: 35,
  padding: "2px 0",

  display: "flex",
  alignItems: "center",

  position: "relative",
  cursor: "pointer",

  border: `2px solid #473198`
})

const Toggle = posed(ToggleStyle)({
  init: {
    background: "#FFFAFF",
    scale: 1
  },
  toggled: {
    background: "#ADFC92"
  }
})

const ToggleSwitch = posed.div({})
const SWITCH_WIDTH = 25
const SwitchStyle = styled.div({
  width: SWITCH_WIDTH,
  height: 25,
  background: "#473198",
  borderRadius: "50%",
  position: "absolute",
  transformOrigin: "top left"
})

const Switch = posed(SwitchStyle)({
  init: {
    left: 0,
  },
  toggled: {
    left: `calc(100% - ${SWITCH_WIDTH}px)`,
    transition: {
      ease: "easeOut",
      duration: 250
    }
  }
})


const App = () => {
  const [cheap, setCheap] = useState(false)
  const [fast, setFast] = useState(false)
  const [quality, setQuality] = useState(false)

  return (
    <Page>
      <Content>
        <p>Ohjelmistoprojektin speksit</p>
        <Row>
          <ToggleSwitch onClick={() => setCheap(!cheap)} initialPose="init" pose={cheap ? "toggled" : "init"}>
            <Toggle>
              <Switch />
            </Toggle>
          </ToggleSwitch>
          <p>Halpaa</p>
        </Row>
        <Row>
          <ToggleSwitch onClick={() => setQuality(!quality)} initialPose="init" pose={quality ? "toggled" : "init"}>
            <Toggle>
              <Switch />
            </Toggle>
          </ToggleSwitch>
          <p>Hyvää</p>
        </Row>
        <Row>
          <ToggleSwitch onClick={() => setFast(!fast)} initialPose="init" pose={fast ? "toggled" : "init"}>
            <Toggle>
              <Switch />
            </Toggle>
          </ToggleSwitch>
          <p>Nopeasti</p>
        </Row>
        <hr />
      </Content>
    </Page>
  );
}


export default App;
