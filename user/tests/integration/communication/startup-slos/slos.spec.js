suite('DeviceOS Startup Service Level Objectives (SLOs)');

platform('gen2', 'gen3');

test('Given canonical example firmware 100% of Device OS releases will provide at least 60 kB of free RAM', async function() {
	const value = await this.particle.receiveEvent('startup_stats');
	const valueObj = JSON.parse(value);
	expect(valueObj.ram).to.be.at.least(60000);
});
