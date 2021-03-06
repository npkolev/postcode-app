import React from 'react'
import Downshift from 'downshift'

const BasicAutocomplete = ({items, value, onChange}) => {
    return (
        <Downshift
            onChange={onChange}
            render={({
                         getInputProps,
                         getItemProps,
                         isOpen,
                         inputValue,
                         selectedItem,
                         highlightedIndex,
                     }) => (
                <div>
                    <input {...getInputProps()}/>
                    {isOpen ? (
                        <div style={{border: '1px solid #ccc'}}>
                            {items
                                .filter(
                                    i =>
                                        !inputValue ||
                                        i.toLowerCase().includes(inputValue.toLowerCase()),
                                )
                                .map((item, index) => (
                                    <div
                                        {...getItemProps({item})}
                                        key={item}
                                        style={{
                                            backgroundColor:
                                                highlightedIndex === index ? 'lightgray' : 'white',
                                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                        </div>
                    ) : null}
                </div>
            )}
        />
    )
}

export default BasicAutocomplete;