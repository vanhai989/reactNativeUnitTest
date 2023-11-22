import React from 'react';
import { TextInput, Text } from 'react-native';

// Mocking the API function
export const mockApiCall = jest.fn().mockResolvedValue({ data: 'Your mock data here' });

// Your SearchComponent
class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchData: null,
    };
  }

  handleTextChange = async (text) => {
    this.setState({ searchText: text });
    try {
      const response = await mockApiCall(text); // Calling the mocked API function
      this.setState({ searchData: response.data });
    } catch (error) {
      // Handle error if API call fails
      console.error('API error:', error);
    }
  };

  render() {
    const { searchText, searchData } = this.state;

    return (
      <>
        <TextInput
          value={searchText}
          onChangeText={this.handleTextChange}
          testID="search-input"
        />
        {searchData && (
          <Text testID="search-result">
            {searchData} {/* Displaying search results */}
          </Text>
        )}
      </>
    );
  }
}

export default SearchComponent;