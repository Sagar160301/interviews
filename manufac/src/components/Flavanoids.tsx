import { type WineStatsProps } from '../interfaces/winedata.interface'
import { calculateClassStats } from '../utils/flavanoid.utils'
import { wineData } from '../utils/data'

const WineStatsTable: React.FC<WineStatsProps> = ({ wineStats }) => {
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
          {wineStats.map((stats, index) => (
            <th key={index}>Class {stats.className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="bold"> Flavanoids Mean</td>
          {wineStats.map((stats) => (
            <td key={stats.className}>{stats.mean.toFixed(2)}</td>
          ))}
        </tr>
        <tr>
          <td className="bold"> Flavanoids Median</td>
          {wineStats.map((stats) => (
            <td key={stats.className}>{stats.median.toFixed(2)}</td>
          ))}
        </tr>
        <tr>
          <td className="bold"> Flavanoids Mode</td>
          {wineStats.map((stats) => (
            <td key={stats.className}>{stats.mode.toFixed(2)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

const Flavanoids: React.FC = () => {
  // Assuming you have your wine data in an array like this:

  const classStats = calculateClassStats(wineData, 'Flavanoids')

  return <WineStatsTable wineStats={classStats} />
}

export default Flavanoids
