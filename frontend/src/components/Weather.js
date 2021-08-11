import React from 'react';


function Weather(props) {

  function goToBudget() {
    window.location.href ="/budget";
  }

  return (
    <div className="dashboard-card flex-card budget-preview card">
      <button className="btn" onClick={goToBudget}>Go to Budgeter</button>
      <div>
        {props.moneyRemaining &&
        '$'+(props.moneyRemaining) + ' remaining this week '
        }
      </div>
    </div>
  )
}

export default Weather;