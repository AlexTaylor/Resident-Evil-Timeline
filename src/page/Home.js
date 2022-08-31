import * as React from 'react';
import FilterContainer from '../component/FilterContainer';
import ResultContainer from '../component/ResultContainer';
import './Home.css';
import timelineData from './../data/db.json';

export default class Home extends React.Component {
  resultsTrigger = false;

  constructor(props) {
    super(props);
    this.state = { filters: {} };
    console.log(timelineData);
  }

  handleFilterSelection = (values) => {
    console.log('Values:', values);
    this.setState({
      filters: values
    });
    this.resultsTrigger = true;
  }

  render() {
    return (
      <main>
        <FilterContainer data={timelineData} handleFilterSelection={this.handleFilterSelection} />
        <ResultContainer data={timelineData} show={this.resultsTrigger} filters={this.state.filters} />
      </main>
    );
  }
}
