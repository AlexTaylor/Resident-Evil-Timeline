import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';

export default class ResultItem extends React.Component {
  render() {
    const item = this.props.item;

    // Availability output.
    let availability;
    if (item.filters.show_availability) {
      availability = <p>{item.availability}</p>
    }

    // Release date output.
    let releaseDate;
    if (item.filters.show_release_date) {
      releaseDate = <span>{item.release_date}</span>
    }

    return (
      <div>
        <Card variant="outlined">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>{item.title} {releaseDate}</h2>
              <p>{item.display_date}</p>
              {availability}
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}
