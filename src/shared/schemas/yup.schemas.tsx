import { isCEP, isCPF, isPhone } from 'brazilian-values';
import * as yup from 'yup';
import { getCep } from '../../services';

export const checkoutSchema = yup.object({
	fullname: yup.string().required('Nome é necessário'),
	cpf: yup
		.string()
		.required('CPF é necessário')
		.test(
			'test-invalid-cpf',
			'Por favor, insira um CPF válido',
			(cpf: any) => isCPF(cpf),
		),
	phone: yup
		.string()
		.required('Telefone é necessário')
		.test(
			'test-invalid-phone',
			'Por favor, insira um telefone válido',
			(phone: any) => isPhone(phone),
		),
	email: yup
		.string()
		.required('O e-mail é necessário')
		.email('Por favor, insira um e-mail válido'),

	cep: yup
		.string()
		.required('CEP é necessário')
		.test(
			'test-invalid-cep',
			'Por favor, insira um CEP válido',
			(cep: any): any => isCEP(cep),
		),
	address: yup.string().required('Endereço é necessário'),
	city: yup.string().required('Cidade é necessária'),
	state: yup.string().required('Estado é necessário'),
});
