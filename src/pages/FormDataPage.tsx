import { PageContainer, ProgressBar, SummaryForm } from '../components/shared';
import { FormField } from '../components/shared';
import { StepButton } from '../components/styled';
import { FormProvider } from '../providers/FormProvider';

export const FormNamesPage: React.FC = () => {
  return (
    <PageContainer>
      <PageContainer.Content>
        <FormProvider>
          {({ nextTo, previousTo, data, value, setValue, maxStep, currentStep }) => (
            <>
              <article className="d-flex">
                <section
                  style={{ width: '50%', margin: '1rem', padding: '1rem' }}
                >
                  <h2>{data.description}</h2>
                  <ProgressBar value={currentStep} max={maxStep} />
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
                  {currentStep > 1 && <StepButton className="m-2" onClick={previousTo}>Anterior</StepButton>}
                  <StepButton className="m-2" onClick={nextTo}>
                    Siguiente
                  </StepButton>
                </section>
              </article>
            </>
          )}
        </FormProvider>
      </PageContainer.Content>
    </PageContainer>
  );
};
