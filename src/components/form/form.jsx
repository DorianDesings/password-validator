import { useEffect, useState } from 'react';
import { v4 as id } from 'uuid';
import { StyledInput, StyledText } from './styled-form';

const RULES = [
	{
		rule: 'Debe tener 8 caracteres',
		property: 'length'
	},
	{
		rule: 'Debe tener al menos una mayúscula',
		property: 'upper'
	},
	{
		rule: 'Debe tener al menos un número',
		property: 'number'
	},
	{
		rule: 'Debe tener al menos un caracter especial',
		property: 'special'
	},
	{
		rule: 'No puede tener espacios',
		property: 'noSpace'
	}
];

const Input = () => {
	const [value, setValue] = useState('');
	const [isValid, setIsvalid] = useState({
		length: false,
		upper: false,
		number: false,
		special: false,
		noSpace: true
	});

	useEffect(() => {
		setIsvalid({
			length: lenghtIsValid(value),
			upper: upperIsValid(value),
			number: numberIsValid(value),
			special: specialIsValid(value),
			noSpace: noSpaceIsValid(value)
		});
	}, [value]);

	return (
		<>
			<StyledInput
				value={value}
				onChange={e => setValue(e.target.value)}
				type='text'
			/>
			{RULES.map(rule => (
				<StyledText key={id()} isValid={isValid[rule.property]}>
					{rule.rule}
				</StyledText>
			))}
		</>
	);
};

const lenghtIsValid = password => password.length >= 8;
const upperIsValid = password => /[A-Z]/.test(password);
const numberIsValid = password => /\d/.test(password);
const specialIsValid = password =>
	/[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~·]/.test(password);
const noSpaceIsValid = password => !/(\s)/.test(password);

export default Input;
