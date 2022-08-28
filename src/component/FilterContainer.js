import * as React from 'react';
import Grid from '@mui/material/Grid';
import FilterEntryTypeInput from './FilterEntryTypeInput';
import FilterSourceInput from './FilterSourceInput';
import FilterCanonInput from './FilterCanonInput';
import ToggleAvailabilityInput from './ToggleAvailabilityInput';
import SortResultsInput from './SortResultsInput';
import ToggleReleaseDateInput from './ToggleReleaseDateInput';

export default class FilterContainer extends React.Component {
  filterValues = {};
  entryTypeOptions = [];
  sourceOptions = [];
  canonOptions = [];
  sortResultsOptions = [];

  constructor(props) {
    super(props);
    this.handleFilterInput = this.handleFilterInput.bind(this);

    // Create the filter options.
    this.sourceOptions = this.props.data.map(item => item.source).filter(this.onlyUnique);
    this.entryTypeOptions = ['Simple', 'Sectioned'];
    this.canonOptions = this.props.data.map(item => item.canon).filter(this.onlyUnique);
    this.sortResultsOptions = ['In-universe date', 'Release date'];
  }

  handleFilterInput(filter, value) {
    console.log('handleSourceFilter', filter, value);
    console.log('props', this.props);

    this.filterValues[filter] = value;
    this.props.handleFilterSelection(this.filterValues);
  }

  onlyUnique(value, index, self) {
    return value !== '' && self.indexOf(value) === index;
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FilterSourceInput options={this.sourceOptions} handleInput={this.handleFilterInput} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FilterEntryTypeInput options={this.entryTypeOptions} handleInput={this.handleFilterInput} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FilterCanonInput options={this.canonOptions} handleInput={this.handleFilterInput} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SortResultsInput options={this.sortResultsOptions} handleInput={this.handleFilterInput} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ToggleAvailabilityInput checked={true} handleInput={this.handleFilterInput} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ToggleReleaseDateInput checked={true} handleInput={this.handleFilterInput} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
