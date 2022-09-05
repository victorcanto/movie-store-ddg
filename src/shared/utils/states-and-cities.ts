import statesAndCities from '../data/estados-cidades.json';

export const getBrazilianStates = () =>
	statesAndCities.estados.map(({ nome }) => nome);

export const getBrazilianCitiesByState = (stateName: string) =>
	statesAndCities.estados.find(({ nome }) => nome === stateName)?.cidades;
