<template>
	<landing-layout>
		<div class="flex flex-col gap-8 py-4">
			<div class="flex flex-col gap-4 text-center text-[#120A00]">
				<h3 class="text-2xl md:text-3xl font-medium">Frequently Asked Questions</h3>
				<p class="small-text">Home / FAQs</p>
			</div>

			<div class="bg-[#ffffff] rounded-3xl p-4 md:p-8 w-full max-w-[1200px] mx-auto">
				<!-- <details v-for="n,index in faqs" :key="index" class="p-2 my-2">
					<summary class="cursor-pointer text-[#000000] text-lg font-medium flex gap-4 items-center justify-between">
						{{ n.question }}
						<img src="../assets/img/icons/faqs/faq_arrow_down.svg" class="" alt="">
					</summary>
					<p class="mt-[20px] text-[#6F6F6F] small-text">{{ n.ans }}</p>
				</details> -->
				<faqComp v-for="n,index in faqs" :key="index" :item="n" />
			</div>
		</div>
	</landing-layout>
</template>

<script setup lang="ts">
import faqComp from '../components/utils/faqComp.vue';
const faqs = [
	{question: 'How did you hear about us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illo suscipit dignissimos modi dolores tenetur quia nobis nesciunt debitis. Autem id veritatis, qui minima eos corporis voluptatibus? Alias, voluptates optio.'},
	{question: 'How did you hear about us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illo suscipit dignissimos modi dolores tenetur quia nobis nesciunt debitis. Autem id veritatis, qui minima eos corporis voluptatibus? Alias, voluptates optio.'},
	{question: 'How did you hear about us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illo suscipit dignissimos modi dolores tenetur quia nobis nesciunt debitis. Autem id veritatis, qui minima eos corporis voluptatibus? Alias, voluptates optio.'},
	{question: 'How did you hear about us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illo suscipit dignissimos modi dolores tenetur quia nobis nesciunt debitis. Autem id veritatis, qui minima eos corporis voluptatibus? Alias, voluptates optio.'},
	{question: 'How did you hear about us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illo suscipit dignissimos modi dolores tenetur quia nobis nesciunt debitis. Autem id veritatis, qui minima eos corporis voluptatibus? Alias, voluptates optio.'},
	{question: 'How did you hear about us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illo suscipit dignissimos modi dolores tenetur quia nobis nesciunt debitis. Autem id veritatis, qui minima eos corporis voluptatibus? Alias, voluptates optio.'},
	{question: 'How did you hear about us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illo suscipit dignissimos modi dolores tenetur quia nobis nesciunt debitis. Autem id veritatis, qui minima eos corporis voluptatibus? Alias, voluptates optio.'}
]
</script>

