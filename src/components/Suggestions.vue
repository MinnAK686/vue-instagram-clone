<script setup></script>

<template>
    <div class="suggestions">
        <div>
            <div class="my-profile mb-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="profile-pic cursor-pointer">
                            <img src="../assets/img/profile.jpg" alt="" />
                        </div>
                        <div class="ml-5">
                            <h1
                                class="text-md text-gray-700 font-semibold cursor-pointer"
                            >
                                minxak
                            </h1>
                            <h5 class="text-sm text-gray-400">minx</h5>
                        </div>
                    </div>
                    <div>
                        <h5
                            class="text-sky-500 text-xs font-semibold cursor-pointer hover:text-gray-900"
                        >
                            Switch
                        </h5>
                    </div>
                </div>
            </div>
            <div class="others-profile mt-3">
                <div class="flex items-center justify-between my-3">
                    <h1 class="text-sm text-gray-400 font-semibold">
                        Suggestions for you
                    </h1>
                    <h1
                        class="text-xs text-gray-700 font-semibold cursor-pointer hover:text-gray-400"
                    >
                        See All
                    </h1>
                </div>
                <div>
                    <div v-for="i in 5" :key="i">
                        <div class="flex items-center mb-3 justify-between">
                            <div class="flex items-center">
                                <div class="profile-pic cursor-pointer">
                                    <img
                                        src="../assets/img/profile.jpg"
                                        alt=""
                                    />
                                </div>
                                <div class="ml-5">
                                    <h1
                                        class="text-md text-gray-700 font-semibold cursor-pointer"
                                    >
                                        minxak
                                    </h1>
                                    <h5 class="text-xs text-gray-400">
                                        Suggested for you
                                    </h5>
                                </div>
                            </div>
                            <div>
                                <h5
                                    class="text-sky-500 text-xs font-semibold cursor-pointer hover:text-gray-900"
                                >
                                    Follow
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-12">
            <h1 class="text-gray-400 text-sm">© 2023 INSTAGRAM FROM META</h1>
        </div>
    </div>
</template>

<style></style>
