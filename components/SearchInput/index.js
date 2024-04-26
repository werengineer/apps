import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
    style={{margin: 10}}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchInput;
