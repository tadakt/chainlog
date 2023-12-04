<script lang="ts">
    import type Quill from "quill";
    import { onMount } from "svelte";

    let quill: Quill;

    export const getContents = () => {
      return quill.getContents();
    }

    onMount(async () => {
        const { default: Quill } = await import("quill");

        quill = new Quill("#editor", {
            modules: {
                toolbar: [
                    [
                        { header: 1 },
                        { header: 2 },
                        "blockquote",
                        "link",
                        "image",
                        "video",
                    ],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "ordered" }],
                    [{ align: [] }],
                    ["clean"],
                ],
            },
            theme: "snow",
            placeholder: "Write your story...",
        });
    });
</script>

<div id="editor" />

<style>
    @import "https://cdn.quilljs.com/1.3.6/quill.snow.css";
</style>
