import * as React from 'react';
import FilterContainer from '../component/FilterContainer';
import ResultContainer from '../component/ResultContainer';
import './Home.css';
import timelineData from './../data/db.json';

export default class Home extends React.Component {
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
  }

  render() {
    return (
      <main>
        <p>
          <img src="images/banner.jpg" alt="Resident Evil Timeline" className="banner" />
        </p>
        <FilterContainer data={timelineData} handleFilterSelection={this.handleFilterSelection} />
        <ResultContainer data={timelineData} filters={this.state.filters} />
      </main>
    );
  }
}
