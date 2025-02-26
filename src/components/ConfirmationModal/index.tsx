import { Dialog, Tooltip } from '@mui/material';
import React from 'react';
import { ConfirmationModalProps } from '../../types';
import { CloseIcon } from '../Card/styles';

import { DeleteButton, ButtonOutline, Container, Content, InputRow, Option } from './styles';

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({onClose, open = false, onDelete}) => {

  const handleDelete = () => {
    onDelete();
    onClose();
  }

  return (
    <Container>
      <Dialog onClose={onClose} open={open}>
        <Content>
          <h3>Você tem certeza que deseja excluir esse destino?</h3>
          <small>Essa ação não poderá ser desfeita.</small>
          <InputRow>
            <ButtonOutline onClick={() => onClose()}>Cancelar</ButtonOutline>
            <DeleteButton onClick={() => handleDelete()}>Deletar</DeleteButton>
          </InputRow>
        </Content>
        <Option>
          <Tooltip title="Close Modal">
            <CloseIcon data-testid="close-button" cursor="pointer" onClick={() => onClose()}/>
          </Tooltip>
        </Option>
      </Dialog>
    </Container>
  );
}

export default ConfirmationModal;