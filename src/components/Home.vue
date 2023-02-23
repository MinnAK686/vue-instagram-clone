<script setup>
import Sidebar from "./Sidebar.vue";
import NewsFeed from "./NewsFeed.vue";
import Suggestions from "./Suggestions.vue";
import TopNavbar from "./mobile/TopNavbar.vue";
import BottomTabBar from "./mobile/BottomTabBar.vue";
</script>

<template>
    <div class="container">
        <div class="flex w-full h-screen">
            <Sidebar />
            <div class="main-content">
                <div class="mt-14">
                    <div class="flex justify-center">
                        <NewsFeed />
                        <Suggestions />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TopNavbar />
    <BottomTabBar />
</template>

<style></style>
