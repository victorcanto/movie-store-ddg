import axios from 'axios';

export interface Cep {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
	error?: boolean;
}

export const getCep = async (cep: string): Promise<Cep> => {
	const cepClean = cep.replace(/\.|\-/g, '');
	const response = await axios.get<Cep>(
		`https://viacep.com.br/ws/${cepClean}/json/`,
	);
	return response.data;
};
