<template>
	<div class="flex flex-col md:flex-row items-center gap-12">
		<div class="w-[300px] h-[190px] rounded-xl p-6 bg-primary relative overflow-hidden flex flex-col justify-between">
			<div class="w-[300px] h-[300px] rounded-full bg-[#FF965D] absolute top-[56px] left-[157px]"></div>
			<div class="flex justify-end">
				<img src="../../assets/img/icons/visa_logo.svg" class="w-[50px]" alt=""/>
			</div>
			<div class="flex items-end justify-between text-[#FFFFFF]">
				<div class="flex flex-col">
					<p class=" small-text font-medium">Felecia Brown</p>
					<div class="flex items-center gap-2 opacity-80">
						<p class="relative bottom-[5px]">....</p>
						<p class="relative bottom-[5px]">....</p>
						<p class="relative bottom-[5px]">....</p>
						 <p class="text-[12px]">8854</p>
					</div>
				</div>
				<p class="text-[12px] relative">12/19</p>
			</div>
		</div>

		<div class="flex flex-row gap-8">
			<div class="flex flex-col gap-4 small-text text-[#8A9099]">
				<p>Card Type:</p>
				<p>Card Number:</p>
				<p>Card Holder:</p>
				<p>Expires:</p>
				<p>Date Added:</p>
			</div>

			<div class="flex flex-col gap-4 small-text text-[#3F434A]">
				<p>Visa</p>
				<p>5880 5087 3288 8854</p>
				<p>Abiola Ogunjobi</p>
				<p>12/24</p>
				<p>2021-11-25</p>
			</div>
		</div>
	</div>
</template>