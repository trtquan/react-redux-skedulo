import "./App.css";
import { Grid } from "semantic-ui-react";
import UsersListContainer from "./containers/UsersListContainer";
import SearchBarContainer from "./containers/SearchBarContainer";
import AlertContainer from "./containers/AlertContainer";

function App() {
  return (
    <Grid centered columns={3}>
      <Grid.Column style={{paddingTop: '2em', paddingBottom: 0}}>
        <SearchBarContainer/>
      </Grid.Column>
      <Grid.Row centered columns={2} style={{paddingTop: 0}}>
        <Grid.Column>
          <UsersListContainer />
        </Grid.Column>
      </Grid.Row>
      <AlertContainer/>
    </Grid>
  );
}

export default App;
