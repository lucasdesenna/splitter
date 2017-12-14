import React from 'react';

import Entry from './Entry';

const entryList = props => (
  <ul>{props.entries.map(entryData => <Entry entryData={entryData} />)}</ul>
);

export default entryList;
