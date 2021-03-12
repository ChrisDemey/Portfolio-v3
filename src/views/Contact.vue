<template>
    <div class="flex items-end justify-center h-full -mt-28 md:items-center">
        <div class="flex space-x-6 md:space-x-32">
            <Motion
                :hover="[
                    'rotate-0 rounded-lg',
                    '-rotate-12 rounded-2xl bg-yellow-100',
                    'rotate-12',
                    '-rotate-12',
                    'rotate-0'
                ]"
                :options="{ instantRollback: true }"
                class="bg-white rounded-lg"
            >
                <Github />
            </Motion>
            <Motion
                :hover="[
                    'rotate-0 rounded-lg',
                    '-rotate-12 rounded-2xl bg-blue-900 text-white',
                    'rotate-12',
                    '-rotate-12',
                    'rotate-0'
                ]"
                :options="{ instantRollback: true }"
                class="bg-white rounded-lg"
            >
                <LinkedIn />
            </Motion>
            <Motion
                :hover="[
                    'rotate-0 rounded-lg',
                    '-rotate-12 rounded-2xl bg-red-500 text-white',
                    'rotate-12',
                    '-rotate-12',
                    'rotate-0'
                ]"
                :options="{ instantRollback: true }"
                class="bg-white rounded-lg"
            >
                <Gmail />
            </Motion>
        </div>
    </div>
</template>

<script>
import Motion from 'tinymotion'

export default {
  components: {
    Motion
  }
}
</script>
