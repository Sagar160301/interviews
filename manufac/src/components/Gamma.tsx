import React from 'react'

import { type WineStats } from '../interfaces/winedata.interface'
import { wineData } from '../utils/data'
import { calculateClassStats } from '../utils/gamma.utils'

interface GammaStatsProps {
  gammaStats: WineStats[]
}

const GammaStatsTable: React.FC<GammaStatsProps> = ({ gammaStats }) => {
  return (
    <table
      style={{
        borderCollapse: 'collapse'
      }}
      border={1}
    >
      <thead>
        <tr>
          <th>Measure</th>
          {gammaStats.map((stat) => (
            <th key={stat.className}>{stat.className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="bold">Gamma Mean</td>
          {gammaStats.map((stat) => (
            <td key={`${stat.className}-mean`}>{stat.mean}</td>
          ))}
        </tr>
        <tr>
          <td className="bold">Gamma Median</td>
          {gammaStats.map((stat) => (
            <td key={`${stat.className}-median`}>{stat.median}</td>
          ))}
        </tr>
        <tr>
          <td className="bold">Gamma Mode</td>
          {gammaStats.map((stat) => (
            <td key={`${stat.className}-mode`}>{stat.mode}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

const Gamma: React.FC = () => {
  // Assuming you have your wine data in an array like this:

  const gammaStats = calculateClassStats(wineData)

  return <GammaStatsTable gammaStats={gammaStats} />
}

export default Gamma
