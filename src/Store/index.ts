import { createStoreon, StoreonModule } from 'storeon'
import { useStoreon } from 'storeon/react' // or storeon/preact

// State structure
interface State {
  user: string
}

// Events declaration: map of event names to type of event data
interface Events {
  // `inc` event which do not goes with any data
  'inc': undefined
  // `set` event which goes with number as data
  'set': string
}

const userModule: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({ user: ''}))
  store.on('set', (state, event) => ({ user: event}))
}

export const store = createStoreon<State, Events>([userModule])