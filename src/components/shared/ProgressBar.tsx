import { ProgressContainer, Paragraph } from '../styled';

interface Props {
  value: number;
  max: number;
}

export const ProgressBar: React.FC<Props> = ({ value, max }) => {
  return (
    <div>
      <Paragraph>Pasos {value}/{max}</Paragraph>
      <ProgressContainer>
          <progress value={value} max={max} />
      </ProgressContainer>
    </div>
  );
}
