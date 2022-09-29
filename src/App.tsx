import { Button, InputField, ProgressContainer } from './components/styled';

function App() {
  return (
    <div>
      <h1>Habi</h1>
      <Button onClick={() => console.log('test')}>vender</Button>
      <InputField placeholder="Jhon Doe" />
      <ProgressContainer width="600px">
        <progress max={10} value={9} />
      </ProgressContainer>
    </div>
  );
}

export default App;
