
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card,feedback, myOnClick }) => (
<div className={`card ${feedback}`} onClick={()=>myOnClick(card)} >
<span className="symbol">
{feedback === 'hidden' ? HIDDEN_SYMBOL : card }
</span>
</div>
)

export default Card

