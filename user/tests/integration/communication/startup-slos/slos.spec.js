suite('DeviceOS Startup Service Level Objectives (SLOs)');

platform('gen2', 'gen3');

test('slo startup stats', async function () {
    const unparsedJson = await this.particle.receiveEvent('startup_stats');
    const startupStats = JSON.parse(unparsedJson);
    console.log(`free_mem=${startupStats.free_mem}`);
    expect(startupStats.free_mem).to.be.at.least(60000);
});