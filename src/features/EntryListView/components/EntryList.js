// @flow
import React from 'react';
import moment from 'moment';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import sass from './EntryList.sass';
import Entry from './Entry';
import EntryType from 'types/Entry.type';

type Props = {
  entries: EntryType[],
  users: any,
};

const groupBy = (entries: EntryType[], dateFormat) => {
  const grouped = [];
  const temp = entries.reduce((groupedList, entry) => {
    const groupValue = moment(entry.isoTimestamp).format(dateFormat);

    (groupedList[groupValue] = groupedList[groupValue] || []).push(entry);

    return groupedList;
  }, {});

  for (let group in temp) {
    grouped.push({
      name: group,
      value: temp[group],
    });
  }

  return grouped;
};

const groupByYearAndMonth = (entries: EntryType[]): any[] => {
  const groupedByYearAndMonth = groupBy(entries, 'YYYY').map(year => {
    year.value = groupBy(year.value, 'MMMM');

    return year;
  });

  return groupedByYearAndMonth;
};

const sortByTimestamp = (a: EntryType, b: EntryType): number =>
  new Date(a.isoTimestamp).getTime() - new Date(b.isoTimestamp).getTime();

const entriesByYearAndMont = (entries, users) => {
  const groupedByYearAndMonth = groupByYearAndMonth(
    entries.sort(sortByTimestamp)
  );
  const entriesByYearAndMonth = [];

  groupedByYearAndMonth.reverse().map(year => {
    year.value.reverse().map(month => {
      entriesByYearAndMonth.push(
        <div key={`entryGroup-${year.name}-${month.name}`}>
          <ListSubheader>{`${month.name} ${year.name}`}</ListSubheader>
          {month.value
            .reverse()
            .map((entry, index) => (
              <Entry
                key={`entry-${month.name}-${index}`}
                entry={entry}
                user={users[entry.userId]}
              />
            ))}
        </div>
      );
    });
  });

  return entriesByYearAndMonth;
};

const entries = (props: Props) => (
  <List className={sass.entries}>
    {entriesByYearAndMont(props.entries, props.users)}
  </List>
);

export default entries;
