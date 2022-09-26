import { ChartTypeRegistry } from 'chart.js'

declare module 'chart.js' {
    interface ChartTypeRegistry {
        derivedBar: ChartTypeRegistry['bar']
    }
}