import { useState } from 'react'
import { diasEntre } from './utils/fechas'
import { DataTable } from './components/DataTable'

interface Estudiante {
  id: string
  nombre: string
  email: string
  nota: number
}

const estudiantes: Estudiante[] = [
  { id: '1', nombre: 'Ana García', email: 'ana@email.com', nota: 8.5 },
  { id: '2', nombre: 'Carlos López', email: 'carlos@email.com', nota: 6.2 },
  { id: '3', nombre: 'María Pérez', email: 'maria@email.com', nota: 9.1 },
  { id: '4', nombre: 'Juan Martínez', email: 'juan@email.com', nota: 5.8 },
]

const columnas = [
  { key: 'nombre' as keyof Estudiante, label: 'Nombre' },
  { key: 'email' as keyof Estudiante, label: 'Email' },
  { key: 'nota' as keyof Estudiante, label: 'Nota' },
]

function App() {
  const dias = diasEntre(new Date('2024-01-01'), new Date())
console.log('Días desde el 1 de enero de 2024:', dias)
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>TaskFlow - Módulo 3</h1>
      <DataTable data={estudiantes} columnas={columnas} />
    </div>
  )
}

export default App