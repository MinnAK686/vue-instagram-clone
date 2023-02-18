import { defineStore } from "pinia";
import { ref } from "vue";

export const usePosts = defineStore("postsStore", () => {
    let posts = ref([]);

    let fetchPosts = async () => {};

    return [posts, fetchPosts];
});
