<template>
    <div>
        <header>
            <h1 align="center">UAT Automation</h1>
        </header>
        <nav>
            <Navigation></Navigation>
        </nav>
        <section>
           <component :is="currentComponent" :user-id="userId"></component>
        </section>
        <footer>
            copyright
        </footer>
    </div>
</template>

<script>
    import eventBus from "./EventBus"
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
                userId:"guest",
                currentComponent:"TestExecution"
            }
        },
        methods:{
            changeCurrentComponent(screen){
                this.currentComponent = screen;
            }
        },
        created(){
            eventBus.$on("change-current-component",this.currentComponent);
        }
    }
</script>

<style>

</style>
