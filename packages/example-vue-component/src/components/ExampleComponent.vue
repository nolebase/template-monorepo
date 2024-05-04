<script setup lang="ts">
import { inject, ref } from 'vue'

import { exampleInjectionKey } from '../constants'

const options = inject(exampleInjectionKey)
const count = ref(0)

function onClick() {
  count.value++
  // eslint-disable-next-line no-console
  console.log('Button clicked')
}
</script>

<template>
  <div>
    <div>
      <span>
        option1 is
      </span>
      <span>
        {{ options?.option1 }}
      </span>
    </div>
    <div>
      <span>
        option2 is
      </span>
      <span>
        {{ options?.option2 }}
      </span>
    </div>
    <div>
      <span>
        optionRuntimeFunction is
      </span>
      <span>
        {{ options?.optionRuntimeFunction('example runtime') }}
      </span>
    </div>
    <button
      bg="blue" rounded="md" text="white" p="2" shadow="md" transition="all 0.3s ease"
      @click="onClick"
    >
      <span>
        Count is: {{ count }}
      </span>
    </button>
  </div>
</template>
