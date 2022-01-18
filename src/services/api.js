const callToApi = () => {

  return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json')
    .then(response => response.json())
    .then(response => {
      const result = response.results;
      return result;
    });
};

export default callToApi;
