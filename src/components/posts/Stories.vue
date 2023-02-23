<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";

let settings = ref({
    itemsToShow: 1,
    snapAlign: "center",
});
let breakpoints = ref({
    300: {
        itemsToShow: 6,
        snapAlign: "start",
    },
});
</script>

<template>
    <div class="stories-container mb-8">
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in 10" :key="slide">
                <!-- <div class="carousel__item">{{ slide }}</div> -->
                <div class="carousel__item">
                    <div class="story-container cursor-pointer">
                        <div class="flex flex-col justify-center">
                            <div class="stories story">
                                <div class="profile-pic">
                                    <img
                                        src="../../assets/img/profile.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <h1 class="text-gray-600 text-xs m-0">
                                motivation
                            </h1>
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <navigation class="-mt-2 text-white text-md">
                    <template #next>
                        <i
                            class="fa-solid fa-circle-chevron-right"
                            style="font-size: 1.5rem"
                        ></i>
                    </template>
                    <template #prev>
                        <i
                            class="fa-solid fa-circle-chevron-left"
                            style="font-size: 1.5rem"
                        ></i>
                    </template>
                </navigation>
            </template>
        </Carousel>
    </div>
</template>

<style></style>
