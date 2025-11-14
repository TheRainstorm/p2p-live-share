import type { useHostFs } from '../fs/host'
import type { useHostScm } from '../scm/host'

export type HostFunctions
  = & ReturnType<typeof useHostFs>
    & ReturnType<typeof useHostScm>

export interface ClientFunctions {}
