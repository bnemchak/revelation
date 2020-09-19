import PropTypes from 'prop-types';

const maniShape = PropTypes.shape({
  colorName: PropTypes.string.isRequired,
  colorId: PropTypes.string.isRequired,
  maniImg: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { maniShape };
