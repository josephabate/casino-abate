import React from 'react';
import './RouletteTable.scss';

const RouletteTable = ({ onSetBetNumber }) => {
    //onPlaceBet
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td rowSpan="3"><button className="table__number table__number--zero" onClick={() => { onSetBetNumber("0") }} >0</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("3") }} >3</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("6") }} >6</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("9") }} >9</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("12") }} >12</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("15") }} >15</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("18") }} >18</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("21") }} >21</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("24") }} >24</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("27") }} >27</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("30") }} >30</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("33") }} >33</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("36") }} >36</button></td>
                    <td> <button className="table__twoToOne" onClick={() => { onSetBetNumber("TOP 2 TO 1") }} >2 TO 1</button></td>
                </tr>
                <tr>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("2") }} >2</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("5") }} >5</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("8") }} >8</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("11") }} >11</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("14") }} >14</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("17") }} >17</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("20") }} >20</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("23") }} >23</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("26") }} >26</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("29") }} >29</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("32") }} >32</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("35") }} >35</button></td>
                    <td> <button className="table__twoToOne" onClick={() => { onSetBetNumber("MIDDLE ROW 2 TO 1") }} >2 TO 1</button></td>
                </tr>
                <tr>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("1") }} > 1</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("4") }} > 4</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("7") }} > 7</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("10") }} > 10</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("13") }} > 13</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("16") }} > 16</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("19") }} > 19</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("22") }} > 22</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("25") }} > 25</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("28") }} > 28</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black" onClick={() => { onSetBetNumber("31") }} > 31</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red" onClick={() => { onSetBetNumber("34") }} > 34</button></td>
                    <td> <button className="table__twoToOne" onClick={() => { onSetBetNumber("BOTTOM ROW 2 TO 1") }}>2 TO 1</button></td>
                </tr>
                <tr>
                    <td className="table__empty"></td>
                    <td colSpan="4"><button className="table__twelveMultiples" onClick={() => { onSetBetNumber("1ST12") }}>1ST12</button></td>
                    <td colSpan="4"><button className="table__twelveMultiples" onClick={() => { onSetBetNumber("2ND12") }}>2ND12</button></td>
                    <td colSpan="4"><button className="table__twelveMultiples" onClick={() => { onSetBetNumber("3RD12") }}>3RD12</button></td>
                    <td className="table__empty"></td>
                </tr>
                <tr>
                    <td className="table__empty"></td>
                    <td colSpan="2"><button className="table__bottomBets" onClick={() => { onSetBetNumber("1TO18") }}>1TO18</button></td>
                    <td colSpan="2"><button className="table__bottomBets" onClick={() => { onSetBetNumber("EVEN") }}>EVEN</button></td>
                    <td colSpan="2"><button className="table__bottomBets table__bottomBets--red" onClick={() => { onSetBetNumber("RED") }}>RED</button></td>
                    <td colSpan="2"><button className="table__bottomBets table__bottomBets--black" onClick={() => { onSetBetNumber("BLACK") }}>BLACK</button></td>
                    <td colSpan="2"><button className="table__bottomBets" onClick={() => { onSetBetNumber("ODD") }}>ODD</button></td>
                    <td colSpan="2"><button className="table__bottomBets" onClick={() => { onSetBetNumber("19TO36") }}>19TO36</button></td>
                    <td className="table__empty"></td>
                </tr>
            </tbody>
        </table>
    );
}

export default RouletteTable;
