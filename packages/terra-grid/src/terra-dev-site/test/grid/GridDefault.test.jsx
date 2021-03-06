import React from 'react';
import Grid from '../../../../lib/Grid';
import './GridExample.scss';

const GridDefault = () => (
  <Grid id="grid">
    <Grid.Row id="row">
      <Grid.Column id="column-1" col={6}>
        <div className="terra-grid-example">First Column content</div>
      </Grid.Column>
      <Grid.Column id="column-2" col={6}>
        <div className="terra-grid-example">Second Column content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridDefault;
