import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ListGroup = ({ 
  items = [], 
  valueProperty = '_id', 
  textProperty = 'name', 
  selectedItem = null, 
  onItemSelect = () => {} 
}) => {
  // Error handling for empty or invalid items
  if (!items || items.length === 0) {
    return (
      <div className="alert alert-warning">
        No items available
      </div>
    );
  }

  return (
    <div className="list-group">
      {items.map(item => {
        // Defensive programming with fallback values
        const itemValue = item[valueProperty] || ''; 
        const itemText = item[textProperty] || 'Unnamed Item'; // Default text if name is missing

        return (
          <button 
            key={itemValue} 
            type="button"
            onClick={() => onItemSelect(item)} 
            className={`list-group-item list-group-item-action ${
              selectedItem && selectedItem[valueProperty] === itemValue 
                ? 'active' 
                : ''
            }`}
            aria-label={`Select ${itemText}`}
          >
            {itemText}
          </button>
        );
      })}
    </div>
  );
};

// PropTypes for type checking and documentation
ListGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      // Validating item properties dynamically using valueProperty and textProperty
      [PropTypes.string]: PropTypes.any
    })
  ),
  valueProperty: PropTypes.string,
  textProperty: PropTypes.string,
  selectedItem: PropTypes.object,
  onItemSelect: PropTypes.func
};

// Default props to ensure consistent behavior
ListGroup.defaultProps = {
  items: [],
  valueProperty: '_id',
  textProperty: 'name',
  selectedItem: null,
  onItemSelect: () => {}
};

export default ListGroup;
