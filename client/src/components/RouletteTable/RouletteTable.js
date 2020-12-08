import React from 'react';
import './RouletteTable.scss';

const RouletteTable = () => {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td rowSpan="3"><button className="table__number table__number--zero">0</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">3</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">6</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">9</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">12</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">15</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">18</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">21</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">24</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">27</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">30</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">33</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">36</button></td>
                    <td> <button className="table__twoToOne">2 TO 1</button></td>
                </tr>
                <tr>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">2</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">5</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">8</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">11</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">14</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">17</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">20</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">23</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">26</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">29</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">32</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">35</button></td>
                    <td> <button className="table__twoToOne">2 TO 1</button></td>
                </tr>
                <tr>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">1</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">4</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">7</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">10</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">13</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">16</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">19</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">22</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">25</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">28</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--black">31</button></td>
                    <td className="table__number--wrapper"><button className="table__number table__number--red">34</button></td>
                    <td> <button className="table__twoToOne">2 TO 1</button></td>
                </tr>
                <tr>
                    <td className="table__empty"></td>
                    <td colSpan="4"><button className="table__twelveMultiples">1ST12</button></td>
                    <td colSpan="4"><button className="table__twelveMultiples">2ND12</button></td>
                    <td colSpan="4"><button className="table__twelveMultiples">3RD12</button></td>
                    <td className="table__empty"></td>
                </tr>
                <tr>
                    <td className="table__empty"></td>
                    <td colSpan="2"><button className="table__bottomBets">1TO18</button></td>
                    <td colSpan="2"><button className="table__bottomBets">EVEN</button></td>
                    <td colSpan="2"><button className="table__bottomBets table__bottomBets--red">RED</button></td>
                    <td colSpan="2"><button className="table__bottomBets table__bottomBets--black">BLACK</button></td>
                    <td colSpan="2"><button className="table__bottomBets">ODD</button></td>
                    <td colSpan="2"><button className="table__bottomBets">19TO36</button></td>
                    <td className="table__empty"></td>
                </tr>
            </tbody>
        </table>
    );
}

export default RouletteTable;
