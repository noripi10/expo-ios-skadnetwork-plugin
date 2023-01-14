import { createSKAdNetworkItems, initialSkadnetworkStrings } from '../src';

describe('createSKAdNetworkItems', () => {
  it('add skadnetworks', async () => {
    const result = createSKAdNetworkItems(initialSkadnetworkStrings);
    expect(result).toHaveLength(initialSkadnetworkStrings.length);
  });
});
