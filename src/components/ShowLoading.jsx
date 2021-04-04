import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

import "../styles/SearchBar.css";
const ShowLoading = (_) => {
  return (
    <Segment style={{height: '100px'}}>
    <Dimmer active inverted>
      <Loader size='medium'>Loading</Loader>
    </Dimmer>
  </Segment>
  );
};
export default ShowLoading;
