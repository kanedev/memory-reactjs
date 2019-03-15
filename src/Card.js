
import React from 'react'
import PropTypes from 'prop-types';
import './Card.css'



const HIDDEN_SYMBOL = '❓'

const Card = ({ card,feedback,index, myOnClick }) => (
<div className={`card ${feedback}`} onClick={()=>myOnClick(index)} >
<span className="symbol">
{feedback === 'hidden' ? HIDDEN_SYMBOL : card }
</span>
</div>
)

Card.propTypes = {

    card: PropTypes.string.isRequired,
  
    feedback: PropTypes.oneOf([
  
      'hidden',
  
      'justMatched',
  
      'justMismatched',
  
      'visible',
  
    ]).isRequired,

    index: PropTypes.number.isRequired,
  
    myOnClick: PropTypes.func.isRequired,
  
  }

export default Card

