import { PageContainer, ProgressBar, SummaryForm } from '../components/shared';
import { FormField } from '../components/shared';
import { FormProvider } from '../providers/FormProvider';

export const FormNamesPage: React.FC = () => {
  return (
    <PageContainer>
      <PageContainer.Content>
        <FormProvider>
          {({ nextTo, previousTo, data, value, setValue }) => (
            <>
              <article className="d-flex">
                <section
                  style={{ width: '50%', margin: '1rem', padding: '1rem' }}
                >
                  <h2>{data.description}</h2>
                  <ProgressBar value={2} max={9} />
                  <FormField
                    formField={{
                      ...data,
                      onChange: setValue,
                      value,
                    }}
                  >
                    <FormField.Control />
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
                  <SummaryForm data={{}} />
                </section>
              </article>
              <article>
                <section
                  className="d-flex justify-content-center"
                  style={{ width: '100%' }}
                >
                  <button onClick={previousTo}>previous</button>
                  <button onClick={nextTo}>
                    next
                  </button>
                </section>
              </article>
            </>
          )}
        </FormProvider>
      </PageContainer.Content>
    </PageContainer>
  );
};
