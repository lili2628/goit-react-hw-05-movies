//import { Form, Input, Button } from './SearchBox.styled';

const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} />

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;