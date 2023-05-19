import { Form, Input, Button } from './SearchBar.styled';
import PropTypes from 'prop-types';

function SearchBar ({ onChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} />

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};