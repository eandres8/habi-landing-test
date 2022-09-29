import { Button, InputField } from './components/styled';

function App() {
  return (
    <div>
      <h1>Habi</h1>
      <Button onClick={() => console.log('test')}>vender</Button>
      <InputField placeholder="Jhon Doe" />
    </div>
  );
}

export default App;
