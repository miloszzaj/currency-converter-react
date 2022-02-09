import { Wrapper, Date } from './styled';

const FormDataDownloadDate = ({ date }) => {
	return (
		<Wrapper>
			<div>Kursy walut pobierane są z Europejskiego Banku Centralnego.</div>
			<div>
				Aktualne na dzień: <Date>{date}</Date>{' '}
			</div>
		</Wrapper>
	);
};

export default FormDataDownloadDate;
