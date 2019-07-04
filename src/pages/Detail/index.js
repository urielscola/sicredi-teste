import React, { useEffect } from 'react';
import { compose } from 'redux';
import { GridContainer } from '../../components/Grid';
import DragonDetail from '../../components/DragonDetail';
import Loader from '../../components/Loader';

import { withDragons } from '../../containers';

const Detail = ({ detail, getDragonDetail, loading, ...props }) => {
  const { resourceId } = props.match.params;
  const isEditing = resourceId !== 'new';

  useEffect(() => {
    if (!detail && resourceId !== 'new') getDragonDetail(resourceId);
  }, [detail, resourceId, getDragonDetail]);

  if (loading) return <Loader />;
  return (
    <GridContainer>
      {detail ||
        (!isEditing && (
          <DragonDetail
            detail={detail}
            resourceId={resourceId}
            loading={loading}
            isEditing={isEditing}
          />
        ))}
    </GridContainer>
  );
};

export default compose(withDragons)(Detail);
