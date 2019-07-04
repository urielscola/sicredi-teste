import React from 'react';
import { GridContainer } from '../../components/Grid';
import Head from '../../components/Head';
import DragonDetail from '../../components/DragonDetail';

const Detail = ({ match }) => {
  const { resourceId } = match.params;
  const isEditing = resourceId !== 'new';

  return (
    <GridContainer>
      <Head title="Detalhe" />
      <DragonDetail resourceId={resourceId} isEditing={isEditing} />
    </GridContainer>
  );
};

export default Detail;
