<template>
    <div class="flex flex-col justify-center">
        <div class="dcp-flip-card">
            <div class="dcp-flip-card-content md:dcp-glow">
                <div class="dcp-flip-card-front">
                     <slot name="content"></slot>
                </div>
                <div class="dcp-flip-card-back p-2">
                    <div class="border-dashed border border-white rounded-md h-full w-full">
                        <div class="h-32 flex flex-col justify-center items-center">
                            <div class="h-16 w-16 flex justify-center items-center fill-white">
                                <SvgLogoWhite class="size-full" aria-hidden="true" />
                            </div>
                        </div>
                        <div>Skill Card</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
	import { SvgLogoWhite } from "~/assets/icons/svg.components";
</script>
