import React from 'react'

export default function TeamSelection( {team, giveTeams, teamAllocation}) {

  return (
    <div className='select-option'  >
        <select name="teamSelection" id="teamSelection"  onClick={teamAllocation} value={team} onChange={giveTeams} >
            <option value="Team A"> Team  A</option>
            <option value="Team B"> Team  B</option>
            <option value="Team C"> Team  C</option>
        </select>
    </div>
  )
}
