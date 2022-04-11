import styled from 'styled-components';
import { Container, VisuallyHidden } from '../../lib/styles';

export const Root = styled.div(Container);

export const Form = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const HiddenLabel = styled.label(VisuallyHidden);

export const CenteredFileLabel = styled.input(() => ({
  textAlignLast: 'center',
}));

export const SubmitButton = styled.input(() => ({
  marginTop: '8px',
}));

export const Link = styled.a(() => ({
  display: 'flex',
}));
