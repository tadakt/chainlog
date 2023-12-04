<script lang="ts">
    import Title from "./Title.svelte";
    import Contents from "./Contents.svelte";
    import Button from "./Button.svelte";
	import { serializePost } from "./Post";
    import { Buffer } from 'buffer';

    let contents: Contents;
    let title: Title;

    const post = () => {
        if (!title) throw new Error('title is not defined');
        if (!contents) throw new Error('contents is not defined');
        const postData = {
            title: title.getTitle(),
            contents: JSON.stringify(contents.getContents()),
        }

        const buffer = Buffer.from(serializePost(postData));
        // TODO fetch post octet stream
    };
    

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
    <Title bind:this={title} />
    <Contents bind:this={contents} />
    <Button text="save" on:click={post} />
</div>