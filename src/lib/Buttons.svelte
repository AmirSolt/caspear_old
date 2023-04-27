
<script>
    export let sceneIndex;
    export let activities;
    export let previousActivityCallback;
    export let nextActivityCallback;
</script>




<div id="button-container">
    {#if sceneIndex > 0}
        <button class="arrow" on:click={previousActivityCallback}> 
            <svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#0a0a0a}</style><g id="row2_1_"><g id="_x31__4_"><path class="st2" d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z" id="left_3_"/></g></g></svg>
        </button>
    {/if}
    {#if sceneIndex <= 0}
        <button class="arrow" style="visibility: hidden;"> 
            <svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#0a0a0a}</style><g id="row2_1_"><g id="_x31__4_"><path class="st2" d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z" id="left_3_"/></g></g></svg>    
        </button>
    {/if}


    {#if sceneIndex < activities.length -1}
        <button class="arrow" on:click={nextActivityCallback}> 
            <svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#0a0a0a}</style><g id="row1_1_"><g id="_x31__3_"><path class="st2" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" id="_x32__2_"/></g></g></svg>
        </button>
    {/if}
    {#if sceneIndex >= activities.length -1}
        <button class="arrow" style="visibility: hidden;">
            <svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#0a0a0a}</style><g id="row1_1_"><g id="_x31__3_"><path class="st2" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" id="_x32__2_"/></g></g></svg>
        </button>
    {/if}
</div>




<style>
    #button-container {
        position: fixed;
        top: 50%;
        left: 2%;
        width: 96%;
        display: flex;
        justify-content: space-between;
    }

    .arrow {
        border: none;
        background: none;
        cursor: pointer;
        width: 2.5em;
        height: 2.5em;
        text-align: center;
    }
 
</style>
