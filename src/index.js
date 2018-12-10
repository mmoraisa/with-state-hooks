import React, { useState } from 'react';

const withStateHooks = state => WrappedComponent => (
  () => (
    <WrappedComponent
      {
        ...Object.assign(
          ...Object.keys(state).map(stateName => {
            const [get, set] = useState(state[stateName]);
            return {
              [stateName]: get,
              [`set${stateName[0].toUpperCase() + stateName.substring(1)}`]: set
            }
          })
        )
      }
    />
  )
)

export default withStateHooks;