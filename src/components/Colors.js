import React, {useState} from 'react';
import ColorCard from './ColorCard';

function Colors() {
    const list = [
        {color: 'Red', background: '#D9292C', class: 'Primary', active: true, text: 'white'},
        {color: 'Red-Orange', background: '#E75A23', class: 'Tertiary', active: true, text: 'black'},
        {color: 'Orange', background: '#F07A16', class: 'Secondary', active: true, text: 'black'},
        {color: 'Yellow-Orange', background: '#F8AE17', class: 'Tertiary', active: true, text: 'black'},
        {color: 'Yellow', background: '#FEEA01', class: 'Primary', active: true, text: 'black'},
        {color: 'Yellow-Green', background: '#BBE304', class: 'Tertiary', active: true, text: 'black'},
        {color: 'Green', background: '#5FCD47', class: 'Secondary', active: true, text: 'black'},
        {color: 'Blue-Green', background: '#05B68A', class: 'Tertiary', active: true, text: 'black'},
        {color: 'Blue', background: '#1B66AC', class: 'Primary', active: true, text: 'white'},
        {color: 'Blue-Violet', background: '#393D7A', class: 'Tertiary', active: true, text: 'white'},
        {color: 'Violet', background: '#381569', class: 'Secondary', active: true, text: 'white'},
        {color: 'Red-Violet', background: '#7B2171', class: 'Tertiary', active: true, text: 'white'}
    ]
    
    const [colorsList, setColorsList] = useState(list);

    const [selected, setSelected] = useState({color:'None'})
    function resetAll(){
        setColorsList(colorsList.map((col)=> col.class ? {...col, active: true}: {...col, active: true}))
    }
    function togglePrimary(){
        setColorsList(colorsList.map((col) => col.class === 'Primary' ? {...col, active: !col.active} : col))
    }
    function toggleSecondary(){
        setColorsList(colorsList.map((col) => col.class === 'Secondary' ? {...col, active: !col.active} : col))
    }
    function toggleTertiary(){
        setColorsList(colorsList.map((col) => col.class === 'Tertiary' ? {...col, active: !col.active} : col))
    }

    function setPrimary(){
        setColorsList(colorsList.map((col)=> col.class === 'Primary' ? {...col, active: true} : {...col, active: false}))
    }
    function setSecondary(){
        setColorsList(colorsList.map((col)=> col.class === 'Secondary' ? {...col, active: true} : {...col, active: false}))
    }
    function setTertiary(){
        setColorsList(colorsList.map((col)=> col.class === 'Tertiary' ? {...col, active: true} : {...col, active: false}))
    }

    return(
        <div>
            {colorsList.map(col => (
                <ColorCard key={col.id} color={col} onClick={(e)=>setSelected(e.target.value)}/>
            ))}
            <p>{selected.color}</p>
            <button onClick={resetAll}>reset</button>
            <button onClick={togglePrimary}>toggle Primary</button>
            <button onClick={toggleSecondary}>toggle Secondary</button>
            <button onClick={toggleTertiary}>toggle Tertiary</button>
            <button onClick={setPrimary}>Primary</button>
            <button onClick={setSecondary}>Secondary</button>
            <button onClick={setTertiary}>Tertiary</button>            
        </div>
    )
}

export default Colors;