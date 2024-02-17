import { type WineData, type WineStats } from '../interfaces/winedata.interface'

export const calculateGamma = (wine: WineData): number => {
  return (Number(wine.Ash) * wine.Hue) / wine.Magnesium
}

export const calculateClassStats = (data: WineData[]): WineStats[] => {
  const classStats: Record<string, number[]> = {}

  // Calculate Gamma for each data point and group by class
  data.forEach((wine) => {
    const className = `Class ${wine.Alcohol}`
    const gamma = calculateGamma(wine)
    if (!classStats[className]) {
      classStats[className] = []
    }
    classStats[className].push(gamma)
  })

  // Calculate mean, median, and mode for each class
  const stats: WineStats[] = []
  for (const className in classStats) {
    const gammaData = classStats[className]
    const mean =
      gammaData.reduce((acc, val) => acc + val, 0) / gammaData.length
    const sortedData = gammaData.sort((a, b) => a - b)
    const mid = Math.floor(sortedData.length / 2)
    const median =
      sortedData.length % 2 === 0
        ? (sortedData[mid - 1] + sortedData[mid]) / 2
        : sortedData[mid]
    const counts: Record<number, number> = {}
    gammaData.forEach((gamma) => {
      counts[gamma] = (counts[gamma] || 0) + 1
    })
    let mode = 0
    let maxCount = 0
    for (const gamma in counts) {
      if (counts[gamma] > maxCount) {
        maxCount = counts[gamma]
        mode = parseInt(gamma)
      }
    }
    stats.push({
      className,
      mean: parseFloat(mean.toFixed(3)),
      median: parseFloat(median.toFixed(3)),
      mode
    })
  }
  return stats
}
