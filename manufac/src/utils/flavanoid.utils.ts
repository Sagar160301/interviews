import {
  type WineData,
  type WineStats
} from '../interfaces/winedata.interface'

export const calculateMean = (
  data: WineData[],
  key: keyof WineData
): number => {
  const values = data.map((wine) => Number(wine[key]))
  const sum = values.reduce((acc, val) => acc + val, 0) // Ensure acc is initialized to 0
  return sum / values.length
}

export const calculateMedian = (
  data: WineData[],
  key: keyof WineData
): number => {
  const values = data.map((wine) => Number(wine[key])).sort((a, b) => a - b)
  const mid = Math.floor(values.length / 2)
  if (values.length % 2 === 0) {
    return (values[mid - 1] + values[mid]) / 2
  } else {
    return values[mid]
  }
}

export const calculateMode = (
  data: WineData[],
  key: keyof WineData
): number => {
  const counts: Record<number, number> = {}
  data.forEach((wine) => {
    const value = Number(wine[key])
    counts[value] = (counts[value] || 0) + 1
  })

  let maxCount = 0
  let mode = 0
  for (const value in counts) {
    if (counts[value] > maxCount) {
      maxCount = counts[value]
      mode = parseInt(value)
    }
  }
  return mode
}

export const calculateClassStats = (
  data: WineData[],
  key: keyof WineData
): WineStats[] => {
  const classStats: WineStats[] = []

  // Group data by class
  const classData: Record<number, number[]> = {}
  data.forEach((wine) => {
    const className = wine.Alcohol
    if (!classData[className]) {
      classData[className] = []
    }
    classData[className].push(Number(wine[key]))
  })

  // Calculate mean, median, and mode for each class
  for (const className in classData) {
    const mean = calculateMean(data, key)
    const median = calculateMedian(data, key)
    const mode = calculateMode(data, key)
    classStats.push({ className: parseInt(className), mean, median, mode })
  }

  return classStats
}
