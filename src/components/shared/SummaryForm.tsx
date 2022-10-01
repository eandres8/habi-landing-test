import React from 'react';
import { Paragraph } from '../styled';

interface Props {
  data: Record<string, any>;
}

export const SummaryForm: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {
        Object.entries(data).map(([key, value]) => (
          <React.Fragment key={key}>
            <Paragraph>{key}</Paragraph>
            <p>{value}</p>
          </React.Fragment>
        ))
      }
    </div>
  );
}
