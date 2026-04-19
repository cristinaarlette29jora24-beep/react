import { differenceInDays } from 'date-fns'

export function diasEntre(fecha1: Date, fecha2: Date): number {
  return differenceInDays(fecha2, fecha1)
}