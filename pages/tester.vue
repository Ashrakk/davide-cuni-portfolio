<template>
	<div>
		<div class="flex flex-row gap-4 justify-center mx-4 my-32">
			<div class="h-16 w-16 border border-white">
				<LogoTest class="h-16 w-16 p-1"></LogoTest>
			</div>
			<div class="h-32 w-32 border border-white">
				<LogoTest class="h-32 w-32 p-1"></LogoTest>
			</div>
			<div class="h-64 w-64 border border-white">
				<LogoTest class="h-64 w-64 p-1"></LogoTest>
			</div>
		</div>
		<div class="flex flex-row gap-4 justify-center mx-4 my-32">
			<div class="h-16 w-16 border border-white">
				<LogoCompare class="h-16 w-16 p-1"></LogoCompare>
			</div>
			<div class="h-32 w-32 border border-white">
				<LogoCompare class="h-32 w-32 p-1"></LogoCompare>
			</div>
			<div class="h-64 w-64 border border-white">
				<LogoCompare class="h-64 w-64 p-1"></LogoCompare>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import LogoTest from "~/assets/svg/frameworks/wp-logo-white.svg?component";
	import LogoCompare from "~/assets/svg/programming/CLang.svg?component";
</script>
