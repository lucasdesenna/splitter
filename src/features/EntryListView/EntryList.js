// @flow
import React from 'react';
import moment from 'moment';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import styles from './EntryList.sass';
import Entry from './Entry';
import EntryType from 'types/Entry.type';

type Props = {
  entries: EntryType[],
};

const groupBy = (entrylist: EntryType[], dateFormat) => {
  const grouped = [];
  const temp = entrylist.reduce((groupedList, entry) => {
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

const groupByYearAndMonth = (entrylist: EntryType[]): any[] => {
  const groupedByYearAndMonth = groupBy(entrylist, 'YYYY').map(year => {
    year.value = groupBy(year.value, 'MMMM');

    return year;
  });

  return groupedByYearAndMonth;
};

const sortByTimestamp = (a: EntryType, b: EntryType): number =>
  new Date(a.isoTimestamp).getTime() - new Date(b.isoTimestamp).getTime();

const entriesByYearAndMont = entryList => {
  const groupedByYearAndMonth = groupByYearAndMonth(
    entryList.sort(sortByTimestamp)
  );
  const entriesByYearAndMonth = [];

  groupedByYearAndMonth.reverse().map(year => {
    year.value.reverse().map(month => {
      entriesByYearAndMonth.push(
        <div key={`entryGroup-${year.name}-${month.name}`}>
          <Subheader>{`${month.name} ${year.name}`}</Subheader>
          {month.value
            .reverse()
            .map((entry, index) => (
              <Entry key={`entry-${month.name}-${index}`} entryData={entry} />
            ))}
        </div>
      );
    });
  });

  return entriesByYearAndMonth;
};

const entryList = (props: Props) => (
  <List className={styles.EntryList}>
    {entriesByYearAndMont(props.entries)}
  </List>
);

export default entryList;
