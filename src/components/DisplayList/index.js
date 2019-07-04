import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Container, List, DisplayHeader } from './styles';
import Loader from '../Loader';
import DragonPreview from '../DragonPreview';
import Button from '../Button';
import { withDragons } from '../../containers';

const DisplayList = ({ list, loading, error, setDragonDetail }) => {
  if (loading) return <Loader />;
  if (error) return <p>Não foi possível exibir os dragões.</p>;
  return (
    <Container>
      <DisplayHeader>
        <p>{list.length} dragões encontrados.</p>
        <Link to="/dragon/new">
          <Button primary label="Criar dragão" />
        </Link>
      </DisplayHeader>
      <List>
        {list.map(item => (
          <DragonPreview
            key={item.id}
            {...item}
            onClick={() => setDragonDetail(item)}
          />
        ))}
      </List>
    </Container>
  );
};

export default compose(withDragons)(DisplayList);
