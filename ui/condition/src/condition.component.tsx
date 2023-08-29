import { ConditionProps } from './condition.interfaces'

const Condition = ({ match, children }: ConditionProps) => (match === true ? children : null)

export { Condition }
