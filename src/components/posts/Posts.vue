<script setup>
import { ref } from "vue";

let likes = ref(453);
let like;
let save;
let toggleLike = () => {
    let isLiked = like.classList.value;
    // ="fa-solid fa-heart";
    if (isLiked === "fa-regular fa-heart") {
        like.classList.value = "fa-solid fa-heart text-red-600";
    } else {
        like.classList.value = "fa-regular fa-heart";
    }
};

let toggleSave = () => {
    let isSaved = save.classList.value;
    if (isSaved === "fa-sharp fa-regular fa-bookmark") {    
        save.classList.value = "fa-sharp fa-solid fa-bookmark";
    } else {
        save.classList.value = "fa-sharp fa-regular fa-bookmark";
    }
};
</script>

<template>
    <div class="posts-container">
        <div class="flex flex-col">
            <!-- <div v-for="i in 5" :key="i"> -->
                <div class="post mb-8 pb-4 border-b border-gray-300">
                    <div class="flex flex-col">
                        <div class="post-header user-profile mb-2">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="profile-pic cursor-pointer">
                                        <img
                                            src="../../assets/img/profile.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="ml-5">
                                        <span
                                            class="text-md text-gray-700 font-semibold cursor-pointer hover:text-gray-400"
                                        >
                                            minxak
                                        </span>
                                        <span class="text-xs text-gray-500">
                                            .
                                            <span>1 hours</span>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h5
                                        class="text-gray-700 text-xs font-semibold cursor-pointer hover:text-gray-500"
                                    >
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="post-body">
                            <div class="flex flex-col">
                                <div class="post-images">
                                    <div>
                                        <img
                                            src="../../assets/img/profile.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <!-- <div></div> -->
                            </div>
                        </div>
                        <div class="post-footer">
                            <div class="icons mb-1">
                                <div class="flex justify-between mt-3 mb-1">
                                    <div class="flex space-x-4">
                                        <h5 class="icon-link" @click="toggleLike">
                                            <i
                                                class="fa-regular fa-heart"
                                                ref="like"
                                            ></i>
                                        </h5>
                                        <h5 class="icon-link">
                                            <i class="fa-regular fa-comment"></i>
                                        </h5>
                                        <h5 class="icon-link">
                                            <i class="fa-regular fa-paper-plane">
                                            </i>
                                        </h5>
                                    </div>
                                    <div>
                                        <h5 class="icon-link" @click="toggleSave">
                                            <i
                                                class="fa-sharp fa-regular fa-bookmark"
                                                ref="save"
                                            >
                                            </i>
                                        </h5>
                                    </div>
                                </div>
                                <div>
                                    <h1 class="text-gray-800 text-xs font-semibold">
                                        <!-- 185 likes -->
                                        {{ likes }} likes
                                    </h1>
                                </div>
                            </div>
                            <div class="post-content">
                                <span
                                    class="text-md text-gray-700 font-semibold cursor-pointer"
                                    >minx</span
                                >
                                <span class="ml-3 text-sm text-gray-800"
                                    >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Provident, dignissimos!</span
                                >
                            </div>
                            <div class="comments my-1">
                                <h5 class="text-sm text-gray-500">
                                    View all <span>4</span> comments
                                </h5>
                            </div>
                            <div class="add-comment">
                                <form>
                                    <input
                                        type="text"
                                        class="text-sm text-gray-700 focus:outline-none"
                                        placeholder="Add a comment..."
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<style></style>
