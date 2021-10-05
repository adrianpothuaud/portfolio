import { Code } from '@/components/styled/Code'
import { Log } from '@/components/molecules/Log'

export const TypeHelp = () => {
  return (
    <Log noCaret key={Math.random()}>Pour voir les commandes disponibles, tapez <Code>aide</Code>.</Log>
  )
}