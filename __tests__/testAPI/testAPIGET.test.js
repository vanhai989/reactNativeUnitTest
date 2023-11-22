import axios from 'axios';
import Users from '../../src/functionsTest/APIGet';

jest.mock('axios');

describe('test mock api', () => {

    test('should fetch users', async () => {
        const users = [{name: 'Bob'}];
        const resp = {data: users};
        axios.get.mockResolvedValue(resp);
      
        // or you could use the following depending on your use case:
        // axios.get.mockImplementation(() => Promise.resolve(resp))
      
        const data = await Users.all();
        expect(data).toEqual(users);

        const users2 = [{name: 'Bob2'}];
        const resp2 = {data: users2};
        axios.get.mockResolvedValue(resp2);
        // axios.get.mockImplementation(() => Promise.resolve(resp2.data))

        const data2 = await Users.secondApi();
        return expect(data2).toEqual(users2);
      });

})
