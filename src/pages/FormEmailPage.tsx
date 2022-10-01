import { useState } from 'react';

import { PageContainer, ProgressBar, SummaryForm } from '../components/shared';
import { FormField } from '../components/shared';
import { FormProvider } from '../providers/FormProvider';

export const FormEmailPage: React.FC = () => {
  const [test, setTest] = useState<any>('');

  const onNextStep = (callback: Function) => {
    return () => {
      callback(test);
    };
  };

  return (
    <PageContainer>
      <PageContainer.Content>
        <FormProvider>
          {({ next, pathname, previus }) => 
            <>
              <article className="d-flex">
              <section style={{ width: '50%', margin: '1rem', padding: '1rem' }}>
                <h2>Registra los datos de tu vivienda</h2>
                <ProgressBar value={2} max={9} />
                <FormField
                  formField={{
                    name: pathname,
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
                <SummaryForm />
              </section>
            </article>
            <article>
              <section className="d-flex justify-content-center" style={{ width: '100%' }}>
                <button onClick={previus}>previus</button>
                <button onClick={onNextStep(next)}>next</button>
              </section>
            </article>
            </>
          }
        </FormProvider>
      </PageContainer.Content>
    </PageContainer>
  );
};