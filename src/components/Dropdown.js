import {React, useState} from "react";
import "../css/style.css";

function Dropdown({data = [], multiSelect = false}) {

    // Created hooks for different states

    // Hook for determining the state of the open button
    const [open, setOpen] = useState(false);
    
    // Hook for differentiating the selected countries
    const [selected, setSelected] = useState([]);
    
    // Hook for displaying the current data 
    // can be the entire list or filtered data post search
    const [displayData, setDisplayData] = useState(data);
    
    // Hook for maintaining all selected options or 
    // deselected options
    const [selectClick, setSelectClick] = useState(true);

    const toggle = () => {
        setSelected([]);
        setOpen(!open);
    }
    // This function determines the selected and deselected elements
    function handleClick(element) {
        if(!selected.some(s => s.id === element.id)) {
            // for single-select
            if(!multiSelect) {
                setSelected([element]);
            }
            // for multi-select 
            else if(multiSelect) {
                setSelected([...selected, element]);
            }
        } else {
            // deselecting the options
            let removeSelected = selected;
            removeSelected = removeSelected.filter(
                i => i.id !== element.id
            );
            setSelected([...removeSelected]);
        }
    }

    // If the option is selected returns true else false
    function isSelected(element) {
        if(selected.some(s => s.id === element.id)) {
            return true;
        }
        return false;
    }

    // Calls the autoSuggest function after 500ms 
    // once a user has stopped typing ("keyup" event listener)
    function debounce(callback, delay) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(callback, delay);
        }
    }
    
    // This function performs the search functionality
    function autoSuggest() {
        let val = document.getElementById("search").value;
        console.log(val);
        let filterSelected = displayData;
        if(val) {
            filterSelected = filterSelected.filter(s => s.value.includes(val));
        } else {
            filterSelected = data;
        }
        setDisplayData([...filterSelected]);
    }

    // This functions checks for the change of input
    function handleInputChange() {
        document.getElementById("search").addEventListener("keyup", debounce(autoSuggest, 500));
    }

    function handleSelectClick(selectClick) {
        if(selectClick) {
            setSelected([...data]);
            setSelectClick(false);
        } else {
            setSelected([]);
            setSelectClick(true);
        }
    }

    return (
        <div> 
            <input id = "search" type="text" placeholder="Select Location" onChange={() => handleInputChange()}/>
            <div 
                className="header" 
                role="button" 
                onKeyPress={() => toggle()}
                onClick={() => toggle()}
            >
                <div>
                    <button id="openDropdown"> {open ? "close" : "open"} </button>
                </div>
            </div>
            {multiSelect && <button id="selectBtn" onClick={() => handleSelectClick(selectClick)}>
                Select / Deselect
            </button>}
            {open && (
                <ul>
                    {displayData.map(d => (
                        <li id="u" key={d.id}>
                            <button 
                                id="parentBtn" 
                                type="button" 
                                onClick={() => handleClick(d)}>
                                <div id="valueBtn">{d.value}</div>
                                <div id="selectedBtn">{isSelected(d) && "  Selected"}</div>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;