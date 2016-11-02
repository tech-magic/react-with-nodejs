import React from 'react';
import TimeLineApi from '../api/MockApi';

var HistoryRecords = TimeLineApi.getRecentTimeLine();  

var TableRecords = HistoryRecords.map(function(row) {

	var trStyle = { backgroundColor: 'aliceblue' };

	return <tr style={trStyle}>
      <td>{row.when}</td>
      <td>{row.who}</td>
      <td>{row.description}</td>
    </tr>
});

var TimeLine = React.createClass({
   render: function(){

      var headingStyle = { 
      	backgroundColor: 'FloralWhite',
        fontSize: '19px' 
      };	

      return <table>
      	<thead>
      		<tr style={headingStyle}>
        		<td>When</td>
        		<td>Who</td>
        		<td>Description</td>
        	</tr>
        </thead>
        <tbody>
        	{TableRecords}
        </tbody>	
      </table>
   }
});

export default TimeLine;
