# Arquitectura final - Módulo 3

## Qué hemos construido
Una tabla de datos genérica `DataTable<T>` en React con TypeScript que puede mostrar cualquier tipo de datos sin perder la seguridad de tipos.

## Por qué TypeScript reduce errores

### Genéricos
El componente `DataTable<T>` acepta cualquier tipo de datos pero obliga a que las columnas definidas existan realmente en ese tipo. En JavaScript puro podrías pasar una columna que no existe y no te enterarías hasta que falla en producción.

### Uniones discriminadas
En el módulo 2, el tipo `EstadoMatricula` con su propiedad `tipo` hace imposible acceder a `asignaturas` si el estado es `SUSPENDIDA`. TypeScript te avisa en el editor antes de ejecutar nada.

### Tipos de utilidad
El estado de edición usa `Partial<T>` porque cuando el usuario está editando una fila puede no haber rellenado todos los campos todavía. Sin TypeScript tendríamos que recordar esto manualmente.

### Never y análisis exhaustivo
El `default` del switch con `never` garantiza que si en el futuro añadimos un nuevo estado de matrícula, el compilador nos obliga a manejarlo. En JavaScript esto se olvida fácilmente y genera bugs silenciosos.

## Conclusión
TypeScript no elimina la necesidad de pensar, pero convierte muchos errores de runtime (que aparecen cuando el usuario usa la app) en errores de compilación (que aparecen mientras programas).