<template>
    <div class="flex flex-col justify-center">
        <div class="custom_flip_card">
            <div class="custom_flip_card_content md:custom_glow">
                <div class="custom_flip_card_front">
                     <slot name="content"></slot>
                </div>
                <div class="custom_flip_card_back p-2">
                    <div class="border-dashed border border-white rounded-md h-full w-full">
                        <div class="h-32 flex flex-col justify-center items-center">
                            <div class="h-16 w-16 flex justify-center items-center fill-white">
                                <Logo_Firm></Logo_Firm>
                            </div>
                        </div>
                        <div>Skill Card</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
	import Logo_Firm from "~/assets/svg/logo_web_white.svg?component";
</script>