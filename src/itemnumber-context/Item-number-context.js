import React from 'react';

const ItemNumberContext = React.createContext({
        items: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id) => {},
        clearCart: () => {}
})

export default ItemNumberContext;