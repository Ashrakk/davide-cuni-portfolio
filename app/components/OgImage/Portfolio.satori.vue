<template>
	<div
		:style="{
			width: '1200px',
			height: '630px',
			display: 'flex',
			background: '#121212',
			color: '#f8fafc',
			fontFamily: 'Inter',
			position: 'relative',
			overflow: 'hidden',
		}"
	>
		<div
			:style="{
				position: 'absolute',
				left: '-240px',
				top: '-210px',
				width: '1320px',
				height: '1040px',
				borderRadius: '660px',
				background: 'radial-gradient(ellipse at center, #333333 0%, #1c1c1d 33%, #121212 68%)',
				opacity: 0.72,
			}"
		/>
		<div
			v-for="particle in particles"
			:key="`${particle.left}-${particle.top}`"
			:style="{
				position: 'absolute',
				left: `${particle.left}px`,
				top: `${particle.top}px`,
				width: `${particle.size}px`,
				height: `${particle.size}px`,
				borderRadius: `${particle.size}px`,
				background: 'radial-gradient(circle, #fbbf24 0%, #f59e0b 42%, rgba(245, 158, 11, 0) 72%)',
				opacity: particle.opacity,
			}"
		/>
		<div
			:style="{
				position: 'absolute',
				left: '44px',
				right: '44px',
				top: '44px',
				bottom: '44px',
				borderLeft: '2px solid #3f3f46',
			}"
		/>

		<div
			:style="{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%',
				padding: '76px',
			}"
		>
			<div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }">
				<div :style="{ display: 'flex', alignItems: 'center', gap: '18px' }">
					<div
						:style="{
							width: '76px',
							height: '76px',
							borderRadius: '38px',
							border: '2px solid #f59e0b',
							background: 'rgba(18, 18, 18, 0.84)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							boxShadow: '0 0 14px rgba(245, 158, 11, 0.46)',
						}"
					>
						<img
							src="/favicon.png"
							alt=""
							:style="{
								width: '54px',
								height: '54px',
								objectFit: 'contain',
							}"
						>
					</div>
					<div :style="{ display: 'flex', flexDirection: 'column' }">
						<div :style="{ fontSize: '34px', fontFamily: 'Teko', fontWeight: 400, lineHeight: 1, letterSpacing: '0px' }">Davide Cuni</div>
						<div :style="{ fontSize: '18px', color: '#a1a1aa', marginTop: '4px' }">Full-Stack Engineer</div>
					</div>
				</div>
				<div
					:style="{
						border: '1px solid #3f3f46',
						borderRadius: '999px',
						padding: '12px 22px',
						fontSize: '20px',
						color: '#e4e4e7',
						background: 'rgba(24, 24, 27, 0.86)',
					}"
				>
					{{ section }}
				</div>
			</div>

			<div
				:style="{ display: 'flex', flexDirection: 'column', maxWidth: '960px', marginTop: '12px' }"
			>
				<div
					v-if="label"
					:style="{
						color: '#f59e0b',
						fontSize: '30px',
						fontFamily: 'Teko',
						fontWeight: 400,
						marginBottom: '20px',
						textTransform: 'uppercase',
						textShadow: '0 0 8px rgba(245, 158, 11, 0.68)',
					}"
				>
					// {{ label }}
				</div>
				<div
					:style="{
						fontSize: title.length > 58 ? '80px' : '94px',
						fontFamily: 'Teko',
						fontWeight: 400,
						lineHeight: 0.9,
						letterSpacing: '0px',
						textShadow: '1px 0 7px rgba(245, 158, 11, 0.34)',
					}"
				>
					{{ title }}
				</div>
				<div
					:style="{
						marginTop: '28px',
						fontSize: '29px',
						lineHeight: 1.28,
						color: '#d4d4d8',
						maxWidth: '860px',
					}"
				>
					{{ description }}
				</div>
			</div>

			<div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#a1a1aa' }">
				<div :style="{ display: 'flex', gap: '14px', fontSize: '20px' }">
					<div :style="{ color: '#f59e0b' }">Portfolio</div>
					<div>/</div>
					<div>Case studies</div>
					<div>/</div>
					<div>Technical writing</div>
				</div>
				<div :style="{ fontSize: '22px', color: '#f8fafc', fontWeight: 700 }">davidecuni.typotek.space</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const particles = [
		{ left: 186, top: 506, size: 7, opacity: 0.55 },
		{ left: 262, top: 104, size: 4, opacity: 0.45 },
		{ left: 338, top: 428, size: 9, opacity: 0.62 },
		{ left: 438, top: 174, size: 5, opacity: 0.52 },
		{ left: 528, top: 560, size: 4, opacity: 0.46 },
		{ left: 634, top: 126, size: 8, opacity: 0.72 },
		{ left: 718, top: 472, size: 5, opacity: 0.48 },
		{ left: 794, top: 214, size: 11, opacity: 0.78 },
		{ left: 878, top: 548, size: 6, opacity: 0.58 },
		{ left: 946, top: 92, size: 5, opacity: 0.48 },
		{ left: 1014, top: 392, size: 9, opacity: 0.7 },
		{ left: 1098, top: 162, size: 6, opacity: 0.56 },
		{ left: 1132, top: 516, size: 4, opacity: 0.44 },
		{ left: 72, top: 360, size: 5, opacity: 0.46 },
		{ left: 1166, top: 300, size: 7, opacity: 0.52 },
	]

	withDefaults(defineProps<{
		title: string
		description: string
		section?: string
		label?: string
		version?: string
	}>(), {
		section: 'Portfolio',
		label: '',
	})
</script>
