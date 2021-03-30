const fetch = require('node-fetch');

(async () => {
  let mixnodeCount = -1;
  while(true) {
    let newMixnodeCount = mixnodeCount;
    try {
      const response = await fetch('https://testnet-validator1.nymtech.net/api/mixmining/topology');
      const data = await response.json();
      newMixnodeCount = data?.mixNodes?.length || newMixnodeCount;
    } catch {
      continue;
    }

    if (mixnodeCount > 0) {
      console.log(`Mixnode count: ${newMixnodeCount}, previous count: ${mixnodeCount}`);

      if (mixnodeCount > newMixnodeCount) {
        console.log('SPIN UP THE FCK UR NODE!!!');
      }

    }

    mixnodeCount = newMixnodeCount;
    await new Promise(res => setTimeout(res, 5000));
  }
})();
