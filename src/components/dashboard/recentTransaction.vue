<template>
	<div class="p-6 rounded-[10px] flex flex-col gap-4 w-full  bg-[#FFFFFF]">
		<div class="flex items-center justify-between">
			<p class="medium-text text-black font-bold">Recent Transactions</p>
			<p class="small-text text-darkGray flex items-center gap-3">View All
				<span><img src="../../assets/img/icons/dashboard/arrow_right.svg" alt=""></span>
			</p>
		</div>
		<div class="w-full overflow-x-auto">
			<div class="min-w-[600px]">
				<div class="w-full flex gap-8 items-center justify-between">
					<p class="small-text font-bold text-[#929EAE] min-w-[150px]">DESCRIPTION</p>
					<p class="small-text font-bold text-[#929EAE] min-w-[100px]">TYPE</p>
					<p class="small-text font-bold text-[#929EAE] min-w-[100px]">AMOUNT</p>
					<p class="small-text font-bold text-[#929EAE] min-w-[100px]">DATE</p>
				</div>
			</div>
		</div>
		<div class="w-fit mx-auto flex flex-col gap-2">
			<img src="../../assets/img/illustrations/dashboard/no_transaction.svg" alt="">
			<p class="small-text text-[#929EAE] text-center">No Transactions to Display</p>
		</div>
		
	</div>
</template>

<script setup lang="ts">

</script>