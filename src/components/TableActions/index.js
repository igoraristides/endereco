import React from 'react';

import PropTypes from 'prop-types';
import {
  MdEdit,
  MdDelete,
  MdPauseCircleOutline,
  MdRemoveRedEye,
  MdFilterNone,
  MdPlayCircleOutline,
} from 'react-icons/md';

import { ReactComponent as InativeIcon } from '~/assets/svg/inative.svg'
import { ReactComponent as ActiveIcon } from '~/assets/svg/active.svg'
import { ReactComponent as RemoveIcon } from '~/assets/svg/remove.svg'
import { ReactComponent as ViewIcon } from '~/assets/svg/view.svg'


import {
  Container,
  DeleteButton,
  EditButton,
  ViewButton,
  DuplicateButton,
} from './styles';

const TableActions = ({
  value,
  onDelete,
  onEdit,
  onView,
  onDuplicate,
  onChangeStatus,
  activated,
}) => {
  return (
    <Container
      value={value}
      onDelete={onDelete}
      onEdit={onEdit}
      onView={onView}
      onDuplicate={onDuplicate}
      onChangeStatus={onChangeStatus}
      activated={activated}
    >
      {onView && (
        <ViewButton type="button" value={value} onClick={onView}>
          <ViewIcon />
        </ViewButton>
      )}
      {onChangeStatus && (
        <>
          {activated ? (
            <DuplicateButton type="button" onClick={onChangeStatus}>
              <InativeIcon />
            </DuplicateButton>
          ) : (
            <DuplicateButton type="button" onClick={onChangeStatus}>
              <ActiveIcon color="green" />
            </DuplicateButton>
          )}
        </>
      )}

      {/* {onDuplicate && (
        <DuplicateButton type="button" value={value} onClick={onDuplicate}>
          <MdFilterNone />
        </DuplicateButton>
      )} */}
      {/* {onChangeStatus && (
        <>
          {activated ? (
            <DuplicateButton type="button" onClick={onChangeStatus}>
              <MdPauseCircleOutline color="red" />
            </DuplicateButton>
          ) : (
            <DuplicateButton type="button" onClick={onChangeStatus}>
              <MdPlayCircleOutline color="green" />
            </DuplicateButton>
          )}
        </>
      )} */}

      {onEdit && (
        <EditButton type="button" value={value} onClick={onEdit}>
          <MdEdit />
        </EditButton>
      )}
      {onDelete && !activated && (
        <DeleteButton type="button" value={value} onClick={onDelete}>
          <RemoveIcon color="white" />
        </DeleteButton>
      )}
    </Container>
  );
};

TableActions.defaultProps = {
  value: '',
  onDelete: null,
  onEdit: null,
  onChangeStatus: null,
  onView: null,
  onDuplicate: null,
  activated: false,
};

TableActions.propTypes = {
  value: PropTypes.string,
  onChangeStatus: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  activated: PropTypes.bool,
  onDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onEdit: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onView: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onDuplicate: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableActions;