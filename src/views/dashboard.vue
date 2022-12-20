<template>
	<div class="flex h-screen ">
		<Sidebar class="hidden lg:flex"/>
		<SideMenu/>
		<div class="w-full relative">
			<Topbar/>
			<Router-View class="p-6 "/>
			<DashboardLoader/>
			<SideModal/>
		</div>
	</div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/core/Sidebar.vue'
import Topbar from '@/components/core/Topbar.vue'
import SideMenu from '../components/core/SideMenu.vue';
import DashboardLoader from '../components/utils/DashboardLoader.vue';
import SideModal from '../components/utils/sideModal.vue'
</script>



