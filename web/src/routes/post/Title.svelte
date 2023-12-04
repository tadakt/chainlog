<script>
    let title = '';
    
    export const getTitle = () => {
      return title;
    }

</script>  

<div id="title">
    <input type="text" placeholder="Enter title" bind:value={title}/>
</div>

<style>
    #title {
        margin: 0 auto;
        width: 100%;
        max-width: 800px;
        padding: 0 1rem;
    }

    #title input {
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
        border: none;
        outline: none;
    }
</style>