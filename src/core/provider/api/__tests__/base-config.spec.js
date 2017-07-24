import { getBaseConfig } from '../base-config'

describe('Base Config', () => {

	const config = getBaseConfig()

	it('should return base configuration', () => {
		expect(config).toHaveProperty('baseURL')
		expect(config).toHaveProperty('headers')
		expect(config.headers).toHaveProperty('Accept')

		expect(config).toMatchSnapshot()

	})

	it('should return header like application/json', () => {
		expect(config.headers.Accept).toEqual('application/json')
	})
})
