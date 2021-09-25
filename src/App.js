import { Form, Card, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { api } from './services/api';

function App() {

  const { setValue, register, getValues } = useForm();

  const handleOnBlur = () => {
    const cep = getValues('cep')?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    api.get(`/${cep}/json`).then(({ data }) => {
      setValue('logradouro', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('uf', data.uf);
    });
  }

  return (
    <Form className="form-container" >
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="Enter CEP" {...register('cep')} onBlur={handleOnBlur} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Logradouro</Form.Label>
            <Form.Control type="text" placeholder="Enter Logradouro" {...register('logradouro')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Número</Form.Label>
            <Form.Control type="text" placeholder="Enter Número" {...register('numero')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" placeholder="Enter Bairro" {...register('bairro')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="Enter Cidade" {...register('cidade')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UF</Form.Label>
            <Form.Control type="text" placeholder="Enter UF" {...register('uf')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Latitude</Form.Label>
            <Form.Control type="text" placeholder="Enter Latitude" {...register('latitude')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Longitude</Form.Label>
            <Form.Control type="text" placeholder="Enter Longitude" {...register('longitude')} />
          </Form.Group>
          <Button variant="primary" type="subit" disabled>
            Submit
          </Button>
        </Card.Body>
      </Card>
    </Form>
  );
}

export default App;
