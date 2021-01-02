<template>
    <div class="container">
        <header>
            <h1 align="center">UAT Automation</h1>
        </header>
        <nav>
            <Navigation></Navigation>
        </nav>
        <section>
            <TestExecution v-if="currentComponent == 'test-execution'"></TestExecution>
            <TestHistory v-if="currentComponent == 'test-history'"></TestHistory>
        </section>
        <footer>
            copyright
        </footer>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import TestExecution from '@/components/TestExecution.vue';
import TestHistory from '@/components/TestHistory.vue';
import eventBus from './EventBus';

export default{
  components: { Navigation, TestExecution , TestHistory },
    nmae:"App",
    data(){
        return {
            userId : "guest",
            currentComponent: "test-execution"
        }
    },
    methods:{
        changeCurrentComponent(screen){
            this.currentComponent = screen;
        }
    },
    created(){
        eventBus.$on("change-current-component",this.changeCurrentComponent)
    }
}
</script>


<style>
</style>
