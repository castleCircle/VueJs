<template>
    <div>
        <header>
            <h1 align="center">UAT Automation</h1>
        </header>
        <nav>
            <Navigation></Navigation>
        </nav>
        <section>
           <component :is="this.$store.state.currentComponent" :user-id="userId"></component>
        </section>
        <footer>
            copyright
        </footer>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation"
    import TestExecution from "@/components/TestExecution"
    import TestHistory from "@/components/TestHistory"
    export default{
        name:"App",
        components:{
            Navigation,
            TestExecution,
            TestHistory
        },
        data(){
            return {
                userId:"guest"
            }
        },
        methods:{
            changeCurrentComponent(screen){
                this.$store.state.currentComponent = screen;
            }
        },
        created(){
            this.eventBus.$on("change-current-component",this.changeCurrentComponent);
        }
    }
</script>

<style>

</style>
