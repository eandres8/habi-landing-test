import { useState } from 'react';

import { PageContainer, ProgressBar } from '../components/shared';
import { FormField } from '../components/shared/FormField/index';

export const FormNamesPage: React.FC = () => {
  const [test, setTest] = useState<string>('');

  return (
    <PageContainer>
      <PageContainer.Content>
        <article className="d-flex">
          <section style={{ width: '50%', margin: '1rem', padding: '1rem' }}>
            <h2>Registra los datos de vivienda</h2>
            <ProgressBar value={2} max={9} />
            <FormField
              formField={{
                name: 'names',
                onChange: (event) => setTest(event.target.value),
                value: test,
                label: 'Nombre y Apellido',
              }}
            >
              <FormField.Input placeholder="Jhon Doe" />
            </FormField>
          </section>
          <section
            style={{
              background: '#cccccc',
              width: '50%',
              margin: '1rem',
              padding: '1rem',
            }}
          >
            holi
          </section>
        </article>
      </PageContainer.Content>
    </PageContainer>
  );
};
