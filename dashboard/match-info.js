const namep1Replicant = nodecg.Replicant('p1name');
const namep2Replicant = nodecg.Replicant('p2name');
const scorep1Replicant = nodecg.Replicant('p1Score');
const scorep2Replicant = nodecg.Replicant('p2Score');

	namep1Replicant.on('change', (newValue, oldValue) => {
		p1Name.innerText = `${newValue}`;
	});
	
	namep2Replicant.on('change', (newValue2, oldValue2) => {
		p2Name.innerText = `${newValue2}`;
	});
	scorep1Replicant.on('change', (newValue2, oldValue2) => {
		p1Score.innerText = `${newValue2}`;
	});
	scorep2Replicant.on('change', (newValue2, oldValue2) => {
		p2Score.innerText = `${newValue2}`;
	});