import { v4 as uuid } from 'uuid'

export default function debug(): string {
  return `example-${uuid()}`
}