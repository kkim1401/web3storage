import styled from 'styled-components';
import { Container } from '../../lib/styles';

export const Root = styled.div(Container);
export const DirectoriesList = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
