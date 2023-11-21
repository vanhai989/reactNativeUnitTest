// import React from 'react';
// import { TextInput } from 'react-native';
// import renderer from 'react-test-renderer';

// describe('TextInput onChangeText event', () => {
//   test('should call onChangeText handler correctly', () => {
//     const onChangeTextMock = jest.fn();
    
//     // Create a test instance of the TextInput component
//     const testInstance = renderer.create(
//       <TextInput
//         onChangeText={onChangeTextMock}
//         testID="test-input"
//       />
//     );

//     // Find the TextInput instance by testID
//     const textInputInstance = testInstance.root.findByProps({ testID: 'test-input' });

//     // Simulate typing into the TextInput
//     textInputInstance.props.onChangeText('Hello');

//     // Ensure that the onChangeText handler was called with the expected value
//     expect(onChangeTextMock).toHaveBeenCalledWith('Hello');
//   });
// });


import React from 'react';
import { TextInput, Text } from 'react-native';
import renderer from 'react-test-renderer';

// Mocking the API function
const mockApiCall = jest.fn().mockResolvedValue({ data: 'Your mock data here' });

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

describe('SearchComponent', () => {
  test('should call API on text change', async () => {
    const testInstance = renderer.create(<SearchComponent />);
    const componentInstance = testInstance.getInstance();
    const textInputInstance = testInstance.root.findByProps({ testID: 'search-input' });

    // Simulating text change in TextInput
    textInputInstance.props.onChangeText('example');

    // Allowing time for the API call to resolve
    await Promise.resolve();

    const searchResultTextInstance = testInstance.root.findByProps({ testID: 'search-result' });
    expect(mockApiCall).toHaveBeenCalledWith('example');
    expect(searchResultTextInstance.props.children).toContain('Your mock data here');
    expect(componentInstance.state.searchText).toBe('example');
  });
});
