export interface WineData {
  Alcohol: number
  'Malic Acid': number | string
  Ash: number | string
  'Alcalinity of ash': number
  Magnesium: number
  'Total phenols': number
  Flavanoids: number | string
  'Nonflavanoid phenols': number | string
  Proanthocyanins: string | number
  'Color intensity': number | string
  Hue: number
  'OD280/OD315 of diluted wines': string | number
  Unknown: number
}

export interface WineStats {
  className: number | string
  mean: number
  median: number
  mode: number
}

export interface WineStatsProps {
  wineStats: WineStats[]
}
