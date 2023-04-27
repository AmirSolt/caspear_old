<script>
    import '../global.css'
</script>

<main>

    <slot />
</main>



<style>
    @media only screen and (min-width: 600px) {
       main{
            padding: 0 15%;
       }
    }
    @media only screen and (max-width: 600px) {
        
    }
</style>