import React from 'react';
import { Paragraph } from '../styled';

interface Props {
  data: Record<string, any>;
  labels: Record<string, any>;
}

export const SummaryForm: React.FC<Props> = ({ data, labels }) => {

  return (
    <div>
      {
        Object.entries(data).map(([key, value]) => (
          <React.Fragment key={key}>
            <Paragraph>{labels[key]}</Paragraph>
            {
              ['string', 'number'].includes(typeof value) && (<p>{value}</p>)
            }
            {
              Array.isArray(value) && (<p>{value.join(', ')}</p>)
            }
            {
              Object.prototype.toString.call(value) === '[object Object]' && (
                Object.entries(value).map(([subkey, subvalue]) => (
                  <p key={subkey}>{subkey} | {subvalue ? 'SI' : 'NO'}</p>
                ))
              )
            }
          </React.Fragment>
        ))
      }
    </div>
  );
}
