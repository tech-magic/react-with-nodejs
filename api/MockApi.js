var timeLineApi = (function() {

   var data = [
      { 
   	     "when": "2 minutes ago",
         "who": "Jill Dupre",
         "description": "Created new account"
      },
      {
         "when": "1 hour ago",
         "who": "Lose White",
         "description": "Added fist chapter"
      },
      {
         "when": "2 hours ago",
         "who": "Jordan Whash",
         "description": "Created new account"
      }
   ];

   function getRecentTimeLine() {
      return data;
   }

   return {
   	  getRecentTimeLine: getRecentTimeLine
   };
})();

export default timeLineApi;
