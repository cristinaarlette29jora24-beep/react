import { useState } from 'react'

interface Columna<T> {
  key: keyof T
  label: string
}

interface DataTableProps<T extends { id: string }> {
  data: T[]
  columnas: Columna<T>[]
}

export function DataTable<T extends { id: string }>({ data, columnas }: DataTableProps<T>) {
  const [editando, setEditando] = useState<Partial<T> | null>(null)
  const [idEditando, setIdEditando] = useState<string | null>(null)

  const iniciarEdicion = (fila: T) => {
    setEditando({ ...fila })
    setIdEditando(fila.id)
  }

  const cancelarEdicion = () => {
    setEditando(null)
    setIdEditando(null)
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
      <thead>
        <tr style={{ background: '#f0f0f0' }}>
          {columnas.map(col => (
            <th key={String(col.key)} style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #ddd' }}>
              {col.label}
            </th>
          ))}
          <th style={{ padding: '8px 12px', border: '1px solid #ddd' }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(fila => (
          <tr key={fila.id} style={{ borderBottom: '1px solid #ddd' }}>
            {columnas.map(col => (
              <td key={String(col.key)} style={{ padding: '8px 12px', border: '1px solid #ddd' }}>
                {idEditando === fila.id
                  ? <input
                      value={String(editando?.[col.key] ?? '')}
                      onChange={e => setEditando(prev => ({ ...prev, [col.key]: e.target.value }))}
                      style={{ width: '100%' }}
                    />
                  : String(fila[col.key])
                }
              </td>
            ))}
            <td style={{ padding: '8px 12px', border: '1px solid #ddd' }}>
              {idEditando === fila.id
                ? <button onClick={cancelarEdicion}>Cancelar</button>
                : <button onClick={() => iniciarEdicion(fila)}>Editar</button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}