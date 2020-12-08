import React from 'react';
import './RouletteTable.scss';

const RouletteTable = () => {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td rowSpan="3">0</td>
                    <td>3</td>
                    <td>6</td>
                    <td>9</td>
                    <td>12</td>
                    <td>15</td>
                    <td>18</td>
                    <td>21</td>
                    <td>24</td>
                    <td>27</td>
                    <td>30</td>
                    <td>33</td>
                    <td>36</td>
                    <td>2 to 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>5</td>
                    <td>8</td>
                    <td>11</td>
                    <td>14</td>
                    <td>17</td>
                    <td>20</td>
                    <td>23</td>
                    <td>26</td>
                    <td>29</td>
                    <td>32</td>
                    <td>35</td>
                    <td>2 to 1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>4</td>
                    <td>7</td>
                    <td>10</td>
                    <td>13</td>
                    <td>16</td>
                    <td>19</td>
                    <td>22</td>
                    <td>25</td>
                    <td>28</td>
                    <td>31</td>
                    <td>34</td>
                    <td>2 to 1</td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan="4">1ST12</td>
                    <td colSpan="4">2ND12</td>
                    <td colSpan="4">3RD12</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan="2">1TO18</td>
                    <td colSpan="2">EVEN</td>
                    <td colSpan="2">RED</td>
                    <td colSpan="2">BLACK</td>
                    <td colSpan="2">ODD</td>
                    <td colSpan="2">19TO36</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}

export default RouletteTable;
