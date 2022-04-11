import { css } from 'styled-components';

/**
 * Style for hiding an element from the screen but still being accessible to screen reader users.
 */
const VisuallyHidden = css(() => ({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap' /* added line */,
  border: 0,
}));

export default VisuallyHidden;
