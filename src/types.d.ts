export type AgenteType = string['banco' | 'persona'];

export type EstadoType = string['enviado' | 'recibido' | 'rechazado' | 'anulado' | 'reversado'];

export interface DeliveryEntry {
  id: number
  fecha: string
  nombre_apellido: string
  monto: number
  pais: string
  agente_tipo: AgenteType
  estado: EstadoType
}
