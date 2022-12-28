<template>
	<auth-layout>
		<div class="flex items-center justify-between gap-6 max-w-[1200px] mx-auto bg-[#FFFFFF] rounded-2xl p-8 md:px-[60px]">
			<div class="flex flex-col gap-4 max-w-[500px] mx-auto lg:w-full">
				<p class="small-text text-boldText font-bold">404 Page</p>
				<h2 class="heading4 text-boldText font-bold">Page not found</h2>
				<p class="small-text text-darkGray max-w-[400px]">The page you are trying to access is unavailable, under contruction or deosn’t exist. Please contact support for more information.</p>
				<div class="flex flex-wrap gap-6 items-center">
					<router-link to="/dashboard" class="btn-short w-full max-w-fit px-2 flex items-center justify-center" >Go to Dashboard</router-link>
					<p class="normal-text text-primary w-full max-w-fit font-medium cursor-pointer">Contact Support</p>
				</div>
			</div>
			<img class="lg:flex hidden max-w-1/2"  src="@/assets/img/illustrations/404.svg" alt="">
		</div>
	</auth-layout>
</template>
