import SearchComponent, { mockApiCall } from "../../src/componentsTest/textInputTest";
import renderer from 'react-test-renderer';
// const mockApiCall = jest.fn().mockResolvedValue({ data: 'Your mock data here' });


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
