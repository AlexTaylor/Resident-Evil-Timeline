import * as React from 'react';
import { Typography, Card } from '@mui/material';

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
      releaseDate = <Typography variant="subtitle1" component="small">({item.release_date})</Typography>
    }

    return (
      <>
        <Card sx={{ my: 2, px: 2 }}>
          <Typography sx={{ mt: 2 }} variant="h5" component="h2">
            {item.title} {releaseDate}
          </Typography>
          <p>{item.display_date}</p>
          {availability}
        </Card>
      </>
    );
  }
}
