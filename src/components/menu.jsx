import PropTypes from 'prop-types';

const Chip = ({ title, icon, setSelectedItem }) => {
  return (
    <button className='pl-3 pr-4 py-2 flex items-center gap-2 border border-gray-darker rounded-full hover:border-gray min-w-max' onClick={()=>setSelectedItem(title)}>
      <img src={icon} alt='' className='w-6 h-6' />
      <p className='font-semibold capitalize text-sm sm:text-base'>{title}</p>
    </button>
  )
}

Chip.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
 };

const Menu = ({ items, setSelectedItem }) => {
  return (
    <nav className='flex gap-3 overflow-auto'>
      {
        items.map((item, index) => (
          <Chip key={index} {...item} setSelectedItem={setSelectedItem} />
        ))
      }
    </nav>
  )
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default Menu