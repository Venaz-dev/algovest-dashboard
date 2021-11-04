import React, {useState, useMemo} from 'react';

const useSortableData = (items, config = null) => {
    // const {transactionDetails} = props;
    // const [sortedField, setSortedField] = useState(null);
    const [sortConfig, setSortConfig] = useState(config);

   const sortedItems = useMemo(() => {
    let sortableItems = [...items];

    if(sortedConfig !== null) {
        sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }
    return sortableItems;
   }, [items, sortConfig]);
    
   const requestSort = key => {
    let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({key, direction});
    }
    return { items: sortedItems, requestSort };
}


const StakeTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.transactionDetails);

    const getClassNamesFor = (date) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === date ? sortConfig.direction : undefined;
    };
    return (

    )
}