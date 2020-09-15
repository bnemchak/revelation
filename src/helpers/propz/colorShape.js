import PropTypes from 'prop-types';

const colorShape = PropTypes.shape({
  colorName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { colorShape };
