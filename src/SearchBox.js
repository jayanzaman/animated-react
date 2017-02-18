import React from 'react';
import {TextField, IconButton} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search';
const SearchBox = ({isOpen, onClick, onChange}) => {
    const baseStyles = {
        open: {
            width: 300,
        },
        closed: {
            width: 0,
        },
        smallIcon: {
            width: 40,
            height: 30
        },
        icon: {
            width: 50,
            height: 0,
            padding: 10,
            left: -1,
            top: 5
        },
        frame: {
            border: 'solid 2px #00BCD4',
            borderRadius: 5
        }
    };
const textStyle = isOpen ? baseStyles.open : baseStyles.closed;
const divStyle = Object.assign({}, textStyle, baseStyles.frame);
    divStyle.width += baseStyles.icon.width + 5;
return (
        <div style={divStyle}>
            <IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon}  onClick={() => onClick()}>
                <SearchIcon />
            </IconButton>
            <TextField
                name='search'
                style={textStyle}
                onChange={() => onChange()}
            />

        </div>
    );
};
export  default SearchBox;
