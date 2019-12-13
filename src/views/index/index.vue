<template>
    <div>
        欢迎来到Eliza的技术博客
        <footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
    </div>
</template>

<script>
import FooterNav from '../../components/footer.vue'
export default {
    components:{
        FooterNav
    },
    data(){
        return{
            isNowPage: true
        }
    }
}
</script>