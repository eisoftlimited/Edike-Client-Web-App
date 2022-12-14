<template>
	<div>
		hello i am inside the dashboard {{firstName}} - {{lastName}}
	</div>
</template>

<script setup lang="ts">
import { useUser } from '../../composables/UserController';

const { firstName, lastName } = useUser()
</script>